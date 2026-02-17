from flask import Flask, jsonify, request
from flask_cors import CORS # <--- DEVE ESSERCI QUESTO
from database_wrapper import DatabaseWrapper

app = Flask(__name__)
CORS(app) # <--- E QUESTO (Abilita i permessi per l'app Ionic)
db = DatabaseWrapper()

# --- ROTTE PRODOTTI ---
@app.route('/prodotti', methods=['GET'])
def get_prodotti():
    # Nota: non scrivo la query qui ma uso il wrapper
    return jsonify(db.execute_get("SELECT p.*, c.nome as categoria_nome FROM prodotti p JOIN categorie c ON p.id_categoria = c.id"))

@app.route('/prodotti', methods=['POST'])
def add_prodotto():
    data = request.json
    query = "INSERT INTO prodotti (nome, prezzo, immagine_url, id_categoria) VALUES (%s, %s, %s, %s)"
    params = (data['nome'], data['prezzo'], data['immagine_url'], data['id_categoria'])
    db.execute_write(query, params)
    return jsonify({"status": "ok"}), 201

# --- ROTTE ORDINI ---
@app.route('/ordini', methods=['POST'])
def post_ordine():
    data = request.json # Aspettiamo un array di id_prodotti
    codice_tavolo = data['codice_tavolo']
    nome_cliente = data['nome_cliente']
    id_prodotti = data['prodotti'] # Esempio: [1, 5, 12]

    for id_p in id_prodotti:
        db.execute_write(
            "INSERT INTO ordini (codice_tavolo, nome_cliente, id_prodotto) VALUES (%s, %s, %s)",
            (codice_tavolo, nome_cliente, id_p)
        )
    return jsonify({"status": "ordinato"}), 201

@app.route('/ordini', methods=['GET'])
def get_ordini():
    query = """
        SELECT o.id, o.codice_tavolo, o.nome_cliente, o.stato, p.nome as piatto 
        FROM ordini o 
        JOIN prodotti p ON o.id_prodotto = p.id 
        ORDER BY o.creato_il DESC
    """
    return jsonify(db.execute_get(query))

@app.route('/ordini/<int:id_ordine>', methods=['PUT'])
def update_stato(id_ordine):
    nuovo_stato = request.json['stato']
    db.execute_write("UPDATE ordini SET stato = %s WHERE id = %s", (nuovo_stato, id_ordine))
    return jsonify({"status": "aggiornato"})

if __name__ == '__main__':
    # Aggiungi host='0.0.0.0' per farlo funzionare bene online
    app.run(debug=True, host='0.0.0.0', port=5000)