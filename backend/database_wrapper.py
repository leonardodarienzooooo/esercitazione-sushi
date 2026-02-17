import pymysql

class DatabaseWrapper:
    def __init__(self):
        self.host = "localhost"
        self.user = "root"      # Cambia se hai una password
        self.password = ""      # Metti la tua password di MySQL se esiste
        self.db = "sushi_db"

    def __get_connection(self):
        return pymysql.connect(
            host=self.host,
            user=self.user,
            password=self.password,
            database=self.db,
            cursorclass=pymysql.cursors.DictCursor
        )

    def execute_get(self, query, params=None):
        conn = self.__get_connection()
        try:
            with conn.cursor() as cursor:
                cursor.execute(query, params)
                return cursor.fetchall()
        finally:
            conn.close()

    def execute_write(self, query, params=None):
        conn = self.__get_connection()
        try:
            with conn.cursor() as cursor:
                cursor.execute(query, params)
                conn.commit()
                return cursor.lastrowid
        finally:
            conn.close()