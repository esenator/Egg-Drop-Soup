import cgi
import datetime
import webapp2




class MainPage(webapp2.RequestHandler):
  def get(self):
    
    #Insert the HTML code in the stuff below

    self.response.out.write("""<html>
    	<head>
    		<title>Event Details</title> 
    			<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
					<link href="EventDetails.css" type="text/css" rel="stylesheet"/>
					<link href = "../rocky.gif" type = "image/gif" rel = "shortcut icon"/>
			</head>
			<body>
				<p>This is a test</p>
			</body>
		</html>""")





app = webapp2.WSGIApplication([
  ('/', MainPage)
], debug=True)
