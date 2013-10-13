import cgi
import datetime
import webapp2




class MainPage(webapp2.RequestHandler):
  def get(self):
    
<<<<<<< HEAD
    #Insert the HTML code in the stuff below
=======
    #Insert code the HTML code in the stuff below
<<<<<<< HEAD
>>>>>>> 3d26a6f9c1024b7b941490ee029f4dc33488d022
=======
>>>>>>> 3d26a6f9c1024b7b941490ee029f4dc33488d022
    self.response.out.write("<html>\n\t<head>\n\t\t<title>Event Details</title>" + 
    	"\n\t\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=iso-8859-1\"/>" +
	"\n\t\t\t<link href=\"EventDetails.css\" type=\"text/css\" rel=\"stylesheet\"/>" +
	"\n\t\t\t<link href = \"../rocky.gif\" type = \"image/gif\" rel = \"shortcut icon\" /> +
	"\n\t</head>\n\n\t<body>" +
	"\n\t\t<p>This is a test</p>\n\t</body>" +
	"\n</html>")





app = webapp2.WSGIApplication([
  ('/', MainPage)
], debug=True)
