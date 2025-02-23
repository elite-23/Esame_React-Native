import psycopg2
import json
from flask import Flask, g, jsonify, request
import flask_cors as CORS

# Connection details
host = "localhost"
port = "5432"
dbname = "accademia"
user = "postgres"
password = "postgres"

api = Flask(__name__)
CORS.CORS(api, origins="*", methods=["GET", "POST", "OPTIONS"])

mock_data = []

def connect_to_db():
    global mock_data
    try:
        connection = psycopg2.connect(
            host=host,
            port=port,
            dbname=dbname,
            user=user,
            password=password
        )
        cursor = connection.cursor()
        mock_data=None
        return connection, cursor
    except Exception as e:
        print(f"Error connecting to real database: {e}")
        # Load mock data from JSON file
        with open("mock_data.json", "r") as file:
            mock_data = json.load(file)
        return None, None  # Return None when using mock data

@api.route('/api/server-mode', methods=['GET'])
def get_server_mode():
    global mock_data
    if mock_data:
        return jsonify({"mode": "mock"})
    else:
        return jsonify({"mode": "real"})
    

@api.before_request
def before_request():
    global mock_data
  
    g.connection, g.cursor = connect_to_db()
    if mock_data:
        g.mock_data = mock_data


@api.route('/api/tables', methods=['GET'])
def get_tables():
    global mock_data
    if not mock_data:
        # Fetch tables from the real database
        cursor = g.cursor
        try:
            cursor.execute("SELECT table_name FROM information_schema.tables WHERE table_schema='public' AND table_type='BASE TABLE'")
            rows = cursor.fetchall()
            tables = [row[0] for row in rows]
            return jsonify(tables)
        except Exception as e:
            g.connection.reset()
            return jsonify({"error": str(e)}), 400
    else:
        tables = list(g.mock_data["tables"].keys())
        return jsonify(tables)



@api.route('/api/columns', methods=['POST'])
def get_columns():
    global mock_data
    table_name = request.json.get('table')
    if not mock_data:
        # Fetch columns from the real database
        cursor = g.cursor
        try:
            cursor.execute("SELECT column_name FROM information_schema.columns WHERE table_name = %s", (table_name,))
            rows = cursor.fetchall()
            columns = ["*"]+[row[0] for row in rows]
            print(columns)
            return jsonify(columns)
        except Exception as e:
            g.connection.reset()
            return jsonify({"error": str(e)}), 400
    else:

        # Use mock data
        if table_name in g.mock_data["tables"]:

            mock_columns = ["*"]+list(g.mock_data["tables"][table_name][0].keys())
            print(mock_columns)
            return jsonify(mock_columns)
        else:
            return jsonify({"error": "Table not found in mock data"}), 404


# Endpoint to execute the query and return results
@api.route('/api/query', methods=['POST'])
def run_query():
    global mock_data
    data = request.json
    table_name = data.get('table')
    column_name = data.get('column')
    where_condition = data.get('where_condition', None)
    
    if not mock_data:
        # Execute query on the real database
        cursor = g.cursor
        query = f"SELECT {column_name} FROM {table_name}"
        if where_condition:
            query += f" WHERE {where_condition} ORDER BY column_name"
        try:
            print("Eccoci")
            print(query)
            cursor.execute(query)
            rows = cursor.fetchall()
            print(rows)
            return jsonify(rows)
        except Exception as e:
            g.connection.reset()
            return jsonify({"error": str(e)}), 400
    else:
        if table_name in g.mock_data["tables"]:
            
            if column_name and column_name!="*":
                datab=[]
                for row in g.mock_data["tables"][table_name]:
                    print(row[column_name])
                    datab.append({column_name:row[column_name]})
                    if where_condition:
                        try:
                            filtered_data = [row for row in data if eval(where_condition)]
                            return jsonify(filtered_data)
                        except Exception as e:
                            return jsonify({"error": f"Invalid WHERE condition: {e}"}), 400
                return jsonify(datab)
            else:
                
                data = g.mock_data["tables"][table_name]
                print(data)
                return jsonify(data)
        else:
            return jsonify({"error": "Table not found in mock data"}), 404


# Teardown to close the connection
@api.teardown_appcontext
def close_connection(exception):
    global mock_data
    if not mock_data:
        cursor = g.cursor
        connection = g.connection
        if cursor:
            cursor.close()
        if connection:
            connection.close()


if __name__ == "__main__":
    api.run(host="127.0.0.1", port=8050)
