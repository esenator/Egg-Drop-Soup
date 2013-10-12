
import cgi
import datetime
import webapp2




class MainPage(webapp2.RequestHandler):
  def get(self):
    
    #Insert code the HTML code in the stuff below
    self.response.out.write("""
			    
			    
			    """





app = webapp2.WSGIApplication([
  ('/', MainPage)
], debug=True)
