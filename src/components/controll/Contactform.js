import React, { Component } from 'react'

export default class Contactform extends Component {
    render() {
        return (
            <div>       
        <div className="contact all-section collection ">
		<div className="container">
			<div className="row">
				<div className="col-md-6 contact-div">
					<div className="contact-heading">
						<h4>Request A Free Consultation</h4>
						<h3>Faculty <span>Asked Question?</span></h3>
						<p>Lorem ipsum dolor sit amet, consectetur lor ilime ilime adipissom unice nas nibh dolor, met
							bibendum elit uilimes nsectetur elit.</p>
					</div>


					<div className="contact-form">
						<form className="">
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Complete Name" required />
							</div>

							<div className="form-group">
								<input type="email" className="form-control" placeholder="Email Address" required />
							</div>

							<div className="form-group">
								<input type="tel" className="form-control" placeholder="Phone No" required />
							</div>

							<div className="form-group message-input">
								<textarea className="form-control" rows="4" placeholder="Message" required ></textarea>
							</div>

							<div className="form-group">
								<button type="submit" className="btn btn-primary">Send Message</button>
							</div>
						</form>
					</div>
				</div>

				<div className="col-md-offset-1 col-md-5 contact-div">
					<div className="contact-heading">
						<h4>Request A Free Consultation</h4>
						<h3>Contact <span> Information</span></h3>
					</div>


					<div className="contact-info">
						<div className="mail row s-mt">
							

							<div className="col-md-9">
								<h4>Email Address</h4>
								<a href="mailto:abc@info.com">lorem@info.com</a>
								<a href="mailto:abcd@info.com">loremipsum@info.com</a>
							</div>
						</div>


						<div className="phone row s-mt">
							

							<div className="col-md-9">
								<h4>Phone Number</h4>
								<a href="tel:+123456789">+123-456-7890</a> <br />
								<a href="tel:+123456789">+123-456-7890</a>
							</div>
						</div>

						<div className="address row s-mt">
						

							<div className="col-md-9">
								<h4>User Address</h4>
								<p className="body-text">Lorem Ipsum Custom Art P.O.box 231 Homer Asum</p>
							</div>
						</div>
					</div>

					<ul className="contact-social">
						<li><a href="#"><i aria-hidden="true" className="fa fa-facebook"></i></a></li>
						<li><a href="#"><i aria-hidden="true" className="fa fa-twitter"></i></a></li>
						<li><a href="#"><i aria-hidden="true" className="fa fa-vimeo"></i></a></li>
						<li><a href="#"><i aria-hidden="true" className="fa fa-google-plus"></i></a></li>
					</ul>
				</div>
			</div>

			<div className="row">
				<div className="col-md-12 col-sm-12">
					<div className="contact_map">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443742.69829216984!2d-95.54290001964007!3d29.669323147873943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86409d2ac6f6bb83%3A0x2f2819d8ab1e3f!2sTX-3%2C%20Houston%2C%20TX%2C%20USA!5e0!3m2!1sen!2s!4v1580884975086!5m2!1sen!2s"
							width="100%" height="450" frameborder="0" allowfullscreen=""></iframe>
					</div>
				</div>
			</div>
		</div>
	</div>
            </div>
        )
    }
}
