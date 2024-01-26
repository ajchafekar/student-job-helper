from flask import Flask, jsonify, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index-first.html')

@app.route("/test2", methods=['POST'])
def test2():
    optn_slct = request.form['optn_slct']
    if optn_slct == "Filling New Data":
        return render_template('test2.html', optn_slct=optn_slct)
    elif optn_slct == "Updating existing data":
        return render_template('test3.html')

@app.route("/test4", methods=['POST'])
def test4():
    optn_slct_mode = request.form['optn_slct_mode']
    if optn_slct_mode == "manual_fill":
        return render_template('test4.html')
    elif optn_slct_mode == "pdf_upload":
        return render_template('test1.html')

if __name__ == "__main__":
    app.run()
