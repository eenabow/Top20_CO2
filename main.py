
from flask import Flask, render_template
app = Flask(__name__)


@app.route('/')
def home():
    return "<h1>Please click the Purchase Sessions button in your mobile app to be taken to a custom-URL for paying your personal trainer.</h1><h2>~ADP Gym</h2><br><br><h3>Having trouble paying? Send an email to the developer, Ryan@Zernach.com, or visit my website —> https://Ryan.Zernach.com</h3>"

@app.route('/pay')
@app.route('/pay/<useremail>/<traineremail>')
@app.route('/pay/<useremail>/<traineremail>/<darklight>')
def pay(useremail="test1", traineremail="test2", darklight='dark'):
    if ((len(useremail.split("%40")) > 1) & (len(traineremail.split("%40")) > 1)):
        cleaneduseremail = useremail.split("%40")
        cleaneduseremail = f"{cleaneduseremail[0]}@{cleaneduseremail[1]}"
        cleanedtraineremail = traineremail.split("%40")
        cleanedtraineremail = f"{cleanedtraineremail[0]}@{cleanedtraineremail[1]}"
    else:
        cleaneduseremail = useremail
        cleanedtraineremail = traineremail
    return render_template('pay.html', useremail=cleaneduseremail, traineremail=cleanedtraineremail, darklight=darklight)


@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.html'), 404


if __name__ == '__main__':
    # Only run for local development.
    # app.run(host='127.0.0.1', port=8080, debug=True)
    app.run()
