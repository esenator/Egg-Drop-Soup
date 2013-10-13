import cgi
import datetime
import webapp2




class MainPage(webapp2.RequestHandler):
  def get(self):
    
    #Insert the HTML code in the stuff below

    self.response.out.write("""<html>
    	<head>
    		<title>Test Page</title> 
    			<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
					<link href="res/style.css" type="text/css" rel="stylesheet"/>
					<link href = "../rocky.gif" type = "image/gif" rel = "shortcut icon"/>
			</head>
			<body>
				<h1>This is a test</h1>
				<p>Did it work?</p>
			</body>
		</html>""")



app = webapp2.WSGIApplication([
  ('/', MainPage)
], debug=True)
