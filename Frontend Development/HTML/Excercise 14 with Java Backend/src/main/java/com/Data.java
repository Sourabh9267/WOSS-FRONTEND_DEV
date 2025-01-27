package com;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;


@WebServlet("/Dataform")
public class Data extends HttpServlet
{
	
	
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		
		PrintWriter out = res.getWriter();
		res.setContentType("text/html");
		
		
		String name = req.getParameter("fname");
		String email=req.getParameter("email");
		String qualification=req.getParameter("qualification");
		String class_details=req.getParameter("class");
		String add=req.getParameter("address");
		
		out.print("<h2> You Entered Name as: "+name+"</h2>");
		out.print("<h2> You Entered Class as: "+class_details+"</h2>");
		out.print("<h2> You Selected your qualification as: "+qualification+"</h2>");
		out.print("<h2> You Entered the adderess as: "+add+"</h2>");
	
	}

	

}
