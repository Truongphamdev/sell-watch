// Tắt/Bật search
let searchIcons = document.querySelectorAll('.menu-search-icon');
let searchClose = document.querySelector('.search-close');
let search = document.querySelector('.search');
searchIcons.forEach(function(searchIcon){
searchIcon.onclick = function() {
		search.classList.add('search-active')
}
})
searchClose.onclick = function() {
    // Khi nhấp vào nút close, chúng ta sẽ thực hiện việc chuyển đổi hiệu ứng
    search.style.animation = 'fade-out 1s ease forwards';

    // Sau khi hiệu ứng hoàn thành, chúng ta sẽ xóa lớp 'search-active'
    setTimeout(function() {
        search.classList.remove('search-active');
        search.style.animation = ''; // Xóa hiệu ứng để chuẩn bị cho lần tiếp theo
    }, 500); // Chờ 500ms (thời gian của hiệu ứng) trước khi xóa lớp 'search-active'
}
// tắt bật giỏ hàng
let cartIcon = document.querySelector('.menu-cart-icon');
let cartClose = document.querySelector('.menu-cart__close');
let cart = document.querySelector('.menu-cart');
let checkout = document.querySelector('.menu-cart-checkout')
cartIcon.onclick = function() {
    cart.classList.add('menu-cart-active');
    checkout.style.display = 'flex';
}

cartClose.onclick = function() {
    // Khi nhấp vào nút close, chúng ta sẽ thực hiện việc chuyển đổi hiệu ứng
    cart.style.animation = 'left-right 1s ease forwards';
	checkout.style.animation = 'left-right 1s ease forwards';

    // Sau khi hiệu ứng hoàn thành, chúng ta sẽ xóa lớp 'search-active'
    setTimeout(function() {
        cart.classList.remove('menu-cart-active');
		checkout.style.display = 'none';
        cart.style.animation = ''; 
        checkout.style.animation = ''; // Xóa hiệu ứng để chuẩn bị cho lần tiếp theo
    }, 500); // Chờ 500ms (thời gian của hiệu ứng) trước khi xóa lớp 'search-active'
}
// login and register
let loginIcon = document.querySelector('.menu-login-icon');
let loginClose = document.querySelector('.login__close');
let login = document.querySelector('.login-main');
let register = document.querySelector('.register-main');
let registerIcon = document.querySelector('.logout-register');
let registerClose = document.querySelector('.register__close')
let loginRegister = document.querySelector('.login-register')
loginIcon.onclick = function() {
    login.classList.add('login-main__active');
    login.style.animation = 'right-left 1s ease forwards';
	register.classList.remove('register-main__active')
}
registerIcon.onclick = function() {
	login.classList.remove('login-main__active');
	register.classList.add('register-main__active')
}
loginRegister.onclick = function () {
	login.classList.add('login-main__active');
    login.style.animation = '';
	register.classList.remove('register-main__active')
}
loginClose.onclick = function() {
    // Khi nhấp vào nút close, chúng ta sẽ thực hiện việc chuyển đổi hiệu ứng
    login.style.animation = 'left-right 1s ease forwards';
    // Sau khi hiệu ứng hoàn thành, chúng ta sẽ xóa lớp 'search-active'
    setTimeout(function() {
        login.classList.remove('login-main__active');
        login.style.animation = ''; // Xóa hiệu ứng để chuẩn bị cho lần tiếp theo
    }, 500); // Chờ 500ms (thời gian của hiệu ứng) trước khi xóa lớp 'search-active'
}
registerClose.onclick = function() {
	register.style.animation = 'left-right 1s ease forwards';
	setTimeout(function() {
		register.classList.remove('register-main__active')
        register.style.animation = ''; // Xóa hiệu ứng để chuẩn bị cho lần tiếp theo
    }, 500); // Chờ 500ms (thời gian của hiệu ứng) trước khi xóa lớp 'search-active'
}

let homeIcon = document.querySelector('.trangchu')
let introIcon = document.querySelector('.gioithieu')
let cartIcons = document.querySelector('.cuahang')
let newsIcon = document.querySelector('.tintuc')
let contactIcon = document.querySelector('.lienhe')
let home = document.querySelector('.page-main')
let intro = document.querySelector('.introduce')
let carts = document.querySelector('.cart-mains')
let news = document.querySelector('.info')
let contact = document.querySelector('.contact')
let productCart = document.querySelector('.product-info')
homeIcon.onclick = function() {
	introIcon.classList.remove('active')
	cartIcon.classList.remove('active')
	newsIcon.classList.remove('active')
	contactIcon.classList.remove('active')
	homeIcon.classList.add('active')
	intro.classList.remove('main-active')
	intro.classList.add('unshow')
	carts.classList.remove('main-active')
	carts.classList.add('unshow')
	news.classList.remove('main-active')
	news.classList.add('unshow')
	contact.classList.remove('main-active')
	contact.classList.add('unshow')
	home.classList.add('main-active')
	home.classList.remove('unshow')
	productCart.classList.add('unshow')
}
introIcon.onclick = function() {
	homeIcon.classList.remove('active')
	cartIcons.classList.remove('active')
	newsIcon.classList.remove('active')
	contactIcon.classList.remove('active')
	introIcon.classList.add('active')
	home.classList.remove('main-active')
	home.classList.add('unshow')
	carts.classList.remove('main-active')
	carts.classList.add('unshow')
	news.classList.remove('main-active')
	news.classList.add('unshow')
	contact.classList.remove('main-active')
	contact.classList.add('unshow')
	intro.classList.add('main-active')
	intro.classList.remove('unshow')
	productCart.classList.add('unshow')
}
cartIcons.onclick = function() {
	homeIcon.classList.remove('active')
	introIcon.classList.remove('active')
	newsIcon.classList.remove('active')
	contactIcon.classList.remove('active')
	cartIcons.classList.add('active')
	home.classList.remove('main-active')
	home.classList.add('unshow')
	intro.classList.remove('main-active')
	intro.classList.add('unshow')
	news.classList.remove('main-active')
	news.classList.add('unshow')
	contact.classList.remove('main-active')
	contact.classList.add('unshow')
	carts.classList.add('main-active')
	carts.classList.remove('unshow')
	productCart.classList.remove('unshow')
	productCart.classList.add('main-active')
}
newsIcon.onclick = function() {
	homeIcon.classList.remove('active')
	cartIcons.classList.remove('active')
	introIcon.classList.remove('active')
	contactIcon.classList.remove('active')
	newsIcon.classList.add('active')
	home.classList.remove('main-active')
	home.classList.add('unshow')
	carts.classList.remove('main-active')
	carts.classList.add('unshow')
	intro.classList.remove('main-active')
	intro.classList.add('unshow')
	contact.classList.remove('main-active')
	contact.classList.add('unshow')
	news.classList.add('main-active')
	news.classList.remove('unshow')
	productCart.classList.add('unshow')
}
contactIcon.onclick = function() {
	homeIcon.classList.remove('active')
	cartIcons.classList.remove('active')
	introIcon.classList.remove('active')
	newsIcon.classList.remove('active')
	contactIcon.classList.add('active')
	home.classList.remove('main-active')
	home.classList.add('unshow')
	carts.classList.remove('main-active')
	carts.classList.add('unshow')
	intro.classList.remove('main-active')
	intro.classList.add('unshow')
	news.classList.remove('main-active')
	news.classList.add('unshow')
	contact.classList.add('main-active')
	contact.classList.remove('unshow')
	productCart.classList.add('unshow')
}
// xử lý sản phẩm
const products = {
	"1": {
		"img":"./img/dich-vu-khac-laser-len-dong-ho-deo-tay-theo-yeu-cau-600x600-1.jpg",
		"nameProduct":"DỊCH VỤ KHẮC LASER LOGO CÔNG TY LÊN ĐỒNG HỒ",
		"priceOld":"200,000 đ",
		"priceNew":"190,000 đ",
		"sales":"13%",
		"des":"Chiếc đồng hồ sẽ thật sự trở thành một món quà đặc biệt khi được điêu khắc tượng hình những đường họa tiết, logo, dòng chữ kỷ niệm…vv.",
	},
	"2": {
		"img":"./img/FSTAA002W0-600x600-1.jpg",
		"nameProduct":"ĐỒNG HỒ ORIENT FSTAA002W0 NAM PIN DÂY DA",
		"priceOld":"3,042,000 ₫",
		"priceNew":"2,737,000 ₫",
		"sales":"10%",
		"des":"Đồng hồ Orient FSTAA002W0 có vỏ kim loại phủ màu vàng sang trọng, kim chỉ và vạch số thanh mãnh nổi bật trên nền số, ô lịch ngày vị trí 3h tinh tế, dây đeo bằng chất liệu da cao cấp màu nâu đem lại phong cách lịch lãm, sang trọng cho phái mạnh",
	},
	"3": {
		"img":"./img/EX1410-88A-600x600-1.jpg",
		"nameProduct":"ĐỒNG HỒ CITIZEN EX1410-88A NỮ ECO-DRIVE DÂY INOX",
		"priceOld":"6,800,000 ₫",
		"priceNew":"6,120,000 ₫",
		"sales":"10%",
		"des":"Đồng hồ Citizen EX1410-88A có mặt số hình chữ nhật bầu tinh tế, kim chỉ và vạch số thanh mãnh nổi bật trên nền số màu trắng trang nhã, phần quai được đính pha lê Swarovski sang trọng mang đến vẻ thanh lịch, duyên dáng dành cho phái nữ.",
	},
	"4": {
		"img":"./img/dong-ho-candino-c4433_3-nu-pin-day-inox-600x600-1 (1).jpg",
		"nameProduct":"ĐỒNG HỒ CANDINO C4433/3 NỮ PIN DÂY INOX",
		"priceOld":"4,440,000 ₫ ",
		"priceNew":"3,996,000 ₫",
		"sales":"10%",
		"des":"Đồng hồ dây da thời trang nữ Candino C4433/3, với mặt đồng hồ sang trọng nền trắng có ánh xà cừ có đính hạt pha lê viền xung quang, kính Sapphire, chữ số lớn dễ đọc, 3 kim chỉ màu bạc.",
	},
	"5": {
		"img":"./img/dong-ho-casio-ga-100de-2adr-nu-pin-day-nhua-600x600-1.jpg",
		"nameProduct":"ĐỒNG HỒ CASIO GA-100DE-2ADR NỮ PIN DÂY NHỰA",
		"priceOld":"",
		"priceNew":"4,393,000 ₫",
		"sales":"",
		"des":"Mẫu G-Shock GA-100DE-2ADR với vẻ ngoài cá tính thích hợp cho những bạn trẻ năng động, phù hợp cho những chuyến đi phượt ấn tượng với khả năng chịu nước lên đến 20ATM, với đồng hồ điện tử hiện thị đa chức năng tiện ích.",
	},
	"6": {
		"img":"./img/dong-ho-casio-ga-110gb-1adr-nam-pin-day-nhua-600x600-1.jpg",
		"nameProduct":"ĐỒNG HỒ CASIO GA-110GB-1ADR NAM PIN DÂY NHỰA",
		"priceOld":"233,444,000 đ",
		"priceNew":"200,200,000 đ",
		"sales":"10%",
		"des":"Đồng hồ nam CASIO GA-110GB-1AVDF có thiết kế mới sử dụng kim loại màu vàng làm vạch số và kim nổi bật, sang trọng hơn so với thiết kế cũ nên mẫu GA-110GB-1AVDF rất được lòng giới trẻ hiện nay.",
	},
	"7": {
		"img":"./img/dong-ho-casio-la670wl-1bdf-nu-pin-day-da-600x600-1.jpg",
		"nameProduct":"ĐỒNG HỒ CASIO LA670WL-1BDF NỮ PIN DÂY DA",
		"priceOld":"851,000 ₫",
		"priceNew":"766,000 ₫",
		"sales":"11%",
		"des":"Mẫu đồng hồ Casio LA670WL-1BDF  với thiết kế bộ máy nhỏ gọn tạo nên vẻ ngoài thanh mảnh nữ tính, vỏ máy tông màu vàng phối cùng mẫu dây đeo kim loại đen tăng thêm vẻ đẹp thời trang.",
	},
	"8": {
		"img":"./img/dong-ho-casio-mtp-e312d-7bvdf-ltp-e312d-4bvdf-doi-pin-day-inox-a-600x600-1.jpg",
		"nameProduct":"ĐỒNG HỒ ĐÔI CASIO MTP-E312D-7BVDF – LTP-E312D-4BVDF PIN DÂY INOX",
		"priceOld":"",
		"priceNew":"4,324,000 ₫",
		"sales":"",
		"des":"Đồng hồ đôi Casio với phong cách trẻ trung, vạch số được thiết kế mỏng tinh tế kèm theo 3 ô phụ với 3 chức năng tiện ích, vỏ máy cùng với dây đeo kim loại đem lại vẻ chắc chắn bền vững cho cặp đôi.",
	},
	"9": {
		"img":"./img/dong-ho-citizen-au1080-20a-nam-eco-drive-day-vai-600x600-1 (1).jpg",
		"nameProduct":"ĐỒNG HỒ CITIZEN AU1080-20A NAM ECO-DRIVE DÂY VẢI",
		"priceOld":"5,600,000 ₫ ",
		"priceNew":"5,040,000 ₫",
		"sales":"10%",
		"des":"Đồng hồ nam Citizen AU1080-20A nổi bật Pin sử dụng công nghệ hiện đại Eco-Drive (Năng Lượng Ánh Sáng), với thiết kế theo phong cách thời trang với dây đeo chất liệu bằng vải tông màu kem trẻ trung.",
	},
	"10": {
		"img":"./img/dong-ho-daniel-wellington-dw00500001-nu-pin-day-inox-600x600-1.jpg",
		"nameProduct":"ĐỒNG HỒ DANIEL WELLINGTON DW00500001 NỮ PIN DÂY INOX",
		"priceOld":"4,700,000 ₫",
		"priceNew":"4,230,000 ₫",
		"sales":"10%",
		"des":"Mẫu đồng hồ nữ Daniel Wellington DW00500001 với nét đặc trưng giản dị đến từ thương hiệu Daniel Wellington với thiết kế bộ máy nhỏ gọn thanh mảnh kết hợp cùng mẫu dây đeo chất liệu vải mang phong cách trẻ trung.",
	},
	"11": {
		"img":"./img/dong-ho-doi-alexandre-christie-ac8c26-1lk-trang-ac8c26-1mk-trang-pin-day-inox-600x600-1 (1).jpg",
		"nameProduct":"ĐỒNG HỒ ĐÔI ALEXANDRE CHRISTIE AC8C26-1LK TRẮNG – AC8C26-1MK TRẮNG PIN DÂY INOX",
		"priceOld":"",
		"priceNew":"6,080,000 ₫",
		"sales":"",
		"des":"ALEXANDRE CHRISTIE là thương hiệu đồng hồ chính hãng nổi tiếng của Nhật Bản với những thiết kế cầu kỳ và vô cùng tinh tế. Ngay từ khi ra đời mẫu đồng hồ đeo tay này đã nhanh chóng được mọi người yêu thích vì chất lượng tốt động cơ bền bỉ vô cùng sang trọng.",
	},
	"12": {
		"img":"./img/dong-ho-doi-olympia-star-opa58012-07msk-trang-opa58012-07lsk-trang-pin-day-inox-600x600-1.jpg",
		"nameProduct":"ĐỒNG HỒ ĐÔI OLYMPIA STAR OPA58012-07MSK TRẮNG – OPA58012-07LSK TRẮNG PIN DÂY INOX",
		"priceOld":"7,728,000 ₫",
		"priceNew":"6,955,000 ₫",
		"sales":"10%",
		"des":"Đồng hồ đôi Olym Pianus (Olympia Star) mặt đồng hồ vàng sang trọng với chất liệu thép không gỉ, dây đeo đờ mi cao cấp, còn có 3 kim chỉ và 1 lịch ngày.",
	},
	"13": {
		"img":"./img/dong-ho-doi-sunrise-sg-sl1085.1601-pin-day-inox-600x600-1.jpg",
		"nameProduct":"ĐỒNG HỒ ĐÔI SUNRISE SG – SL1085.1601 PIN DÂY INOX",
		"priceOld":"4,700,000 ₫",
		"priceNew":"4,230,000 ₫",
		"sales":"10%",
		"des":"Khi mua cặp đồng hồ đôi Sunrise SG.SL1085.1601, quý khách sẽ được bảo hành toàn cầu 1 năm, ngoài ra quý khách sẽ được tặng gói bảo hành máy và thay pin miễn phí trọn đời tại cửa hàng chúng tôi.",
	},
	"14": {
		"img":"./img/dong-ho-seiko-sgeg99p1-nam-pin-day-da-a-600x600-1 (1).jpg",
		"nameProduct":"ĐỒNG HỒ SEIKO SGEG99P1 NAM PIN DÂY DA",
		"priceOld":"",
		"priceNew":"3,684,000 ₫",
		"sales":"",
		"des":"Đồng hồ Seiko SGEG99P1 dành cho nam, mặt đồng hồ màu đen, chữ số La Mã lớn màu trắng, vỏ thép không gỉ, dây da màu đen, mặt kính Sapphire chịu lực chống trầy, 1 ô lịch hiển thị ngày.",
	},
	"15": {
		"img":"./img/dong-ho-tissot-t063.907.11.058.00-nam-tu-dong-day-inox-600x600-1 (1).jpg",
		"nameProduct":"ĐỒNG HỒ TISSOT T063.907.11.058.00 NAM TỰ ĐỘNG DÂY INOX",
		"priceOld":"",
		"priceNew":"21,940,000 ₫",
		"sales":"",
		"des":"Giản dị và thanh lịch đến từ mẫu đồng hồ Tissot T063.907.11.058.00, được gia công tạo hình với kiểu dáng mỏng tạo nên vẻ tinh tế đầy sang trọng cùng chi tiết kim chỉ vạch số được bao phủ vàng hồng.",
	},
	"16": {
		"img":"./img/3.jpg",
		"nameProduct":"LONGINES MASTER WATCH 38.5MM",
		"priceOld":"",
		"priceNew":"75,640,000 ₫",
		"sales":"",
		"des":"Longines là thương hiệu đồng hồ cao cấp Thụy Sĩ, ra đời vào năm 1832,Nổi bật với đồng hồ cơ Automatic và pin Quartz mức giá trung - cao cấp.",
	},
	"17": {
		"img":"./img/2.jpg",
		"nameProduct":"MICHAEL KORS MINI SOFIE PAVÉ PEACOCK WATCH 36MM",
		"priceOld":"",
		"priceNew":"11,090,000 ₫",
		"sales":"",
		"des":"Longines là thương hiệu đồng hồ cao cấp Thụy Sĩ, ra đời vào năm 1832,Nổi bật với đồng hồ cơ Automatic và pin Quartz mức giá trung - cao cấp.",
	},
	"18": {
		"img":"./img/17.jpg",
		"nameProduct":"MOVADO MUSEUM 70TH ANNIVERSARY SPECIAL EDITION WATCH 35MM",
		"priceOld":"18,330,000 ₫",
		"priceNew":"8,330,000 ₫",
		"sales":"55%",
		"des":"Đồng hồ Phiên bản đặc biệt kỷ niệm 70 năm của Women's Museum Dial, vỏ thép không gỉ mạ PVD vàng vàng siêu mỏng 35 mm, mỏng 5,85 mm, có vỏ thép kỷ niệm; mặt số màu xám với các kim và chấm phẳng nguyên bản tông màu vàng vàng, dây đeo bằng da bê màu xám với khóa lưỡi cổ điển bằng thép không gỉ mạ PVD màu vàng vàng.",
	},
	"19": {
		"img":"./img/21.jpg",
		"nameProduct":"BIG BANG MXM18 SANG BLEU 39",
		"priceOld":"",
		"priceNew":"739,370,000 ₫",
		"sales":"",
		"des":"Siêu phẩm thời trang và độc đáo - giới hạn chỉ 200 chiếc toàn cầu.",
	},
	"20": {
		"img":"./img/27.jpg",
		"nameProduct":"BULOVA MARINE STAR DIAMOND WATCH 32 MM",
		"priceOld":"",
		"priceNew":"12,530,000 ₫",
		"sales":"",
		"des":"From the Marine Star collection, get swept away in the effortless elegance of this richly detailed women’s timepiece with a rose gold-tone stainless steel case and bracelet. The case features 24 individually hand set diamonds on a rose gold-tone bezel and is finished with a sapphire crystal and a white mother-of-pearl dial. Also featuring a deployant clasp closure and water resistance to 100 meters, this must-have watch keeps perfect time while channeling a timeless glamour.",
	},
	"21": {
		"img":"./img/885sslb-600x600-1.jpg",
		"nameProduct":"ĐỒNG HỒ SKAGEN 885SSLB NỮ PIN DÂY DA",
		"priceOld":"",
		"priceNew":"5,900,000 ₫",
		"sales":"",
		"des":"Đồng hồ độc đáo dành cho nữ giới Skagen 885SSLB, với vỏ đồng hồ là thép không gỉ, kiểu dáng xoáy, mặt đồng hồ có trắng, dây da màu đen cao cấp, còn có 2 kim chỉ tinh tế.",
	},
}
let homes = document.querySelector('.page-main')
let cartMain = document.querySelector('.cart-mains')
const buyButtons = document.querySelectorAll('.cart-onclick');
buyButtons.forEach(button => {
	button.addEventListener('click', function() {
        const productId = this.getAttribute('data-id');
		const product = products[productId];
		const productInfo = document.querySelector('.product-info');
		if (product && productInfo) {
			productInfo.innerHTML = `
			<div>
			<p class="cart-js-reload">Quay lại đầu trang</p>
<div class="cart-js">
	<img class="js-img" src="${product.img}" alt="">
	<div>
		<h1 class="js-header">${product.nameProduct}</h1>
		<div class="cart-js__prices">
			<p class="js-priceOld">${product.priceOld}</p>
			<span class="js-priceNew">${product.priceNew}</span>
		</div>
		<h5>${product.des}</h5>
		<div class="cart-js__button">
			<a href="./checkout.html">
			<button type="button">MUA NGAY</button>
			</a>
			<div class="cartIcon">
			<button class="cart-full" type="button">THÊM VÀO GIỎ HÀNG</button>
			</div>
		</div>
		<span class="cart-js__love">Yêu thích</span>
		<div class="cart-js__icon" >
			<div>
			<i class="fa-solid fa-minimize"></i><span>Size Guide</span>
			</div>
			<div style="margin-left: 10px;">
				<i class="fa-solid fa-truck"></i><span>Delivery to store</span>
			</div>
		</div>
		<div class="icon-store">
			<i class="fa-solid fa-store"></i><span>Store availability</span>
		</div>
		<div class="cart-js__info">
			<span>Thông tin bổ sung</span><p>+</p>
		</div>
		<hr>
		<div class="cart-js__report">
			<span>Đánh giá (0)</span><p>+</p>
		</div>
		<h4>CHIA SẺ</h4>
		<div class="cart-icon__socials">
			<div>
				<i class="fa-brands fa-facebook"></i><span>Facebook</span>
			</div>
			<div>
				<i class="fa-brands fa-twitter"></i><span>Twitter</span>
			</div>
			<div>
				<i class="fa-brands fa-pinterest"></i><span>Pinterest</span>
			</div>
			<div>
				<i class="fa-brands fa-whatsapp"></i><span>Whatsapp</span>
			</div>
		</div>
	</div>
</div>
<div style="margin-top: 120px;">
	<h2 style="margin-left: 60px;">SẢN PHẨM TƯƠNG TỰ</h2>
				<div class="main-carts">
				<div class="menu-carts watch-main__product" >
					<div class="menu-carts__lable"><p>NEW!</p></div>
					<div class="sale-price"><span>10%</span></div>
					<img data-id="4" class="cart-onclick wishlist-img" src="./img/dong-ho-candino-c4433_3-nu-pin-day-inox-600x600-1 (1).jpg" alt="">
					<div class="cart-block">
						<div class="cart-hover cartIcon"><span class="cart-hover_giohang"><i class="fas fa-shopping-cart cart-full"></i>THÊM VÀO GIỎ HÀNG</span>
						</div>
							<div class="heart_pair cart-hover">
								<span class="cart-hover_tym"><i class="far fa-heart heart heart_full"></i>YÊU THÍCH</span>
							</div>
					</div>
					<h3 data-id="4" class="cart-onclick product-header">ĐỒNG HỒ CANDINO C4433/3 NỮ PIN...</h3>
					<div class="price-carts">
						<div class="price-line">4,440,000 ₫ </div><div class="price-main">3,996,000 ₫</div>
					</div>
				</div>
				<div class="menu-carts watch-main__product">
					<div class="menu-carts__lable"><p>NEW!</p></div>
					<img data-id="5" class="cart-onclick wishlist-img" src="./img/dong-ho-casio-ga-100de-2adr-nu-pin-day-nhua-600x600-1.jpg" alt="">
					<div class="cart-block">					
						<div class="cart-hover cartIcon"><span class="cart-hover_giohang"><i class="fas fa-shopping-cart cart-full"></i>THÊM VÀO GIỎ HÀNG</span>
						</div>
							<div class="heart_pair cart-hover">
								<span class="cart-hover_tym"><i class="far fa-heart heart heart_full"></i>YÊU THÍCH</span>
							</div>
					</div>
					<h3 data-id="5" class="cart-onclick product-header">ĐỒNG HỒ CASIO GA-100DE-2ADR NỮ...</h3>
					<div class="price-carts">
						<div class="price-line"></div>
						<div class="price-main">4,393,000 ₫</div>
					</div>
				</div>
				<div class="menu-carts watch-main__product" >
					<div class="menu-carts__lable"><p>NEW!</p></div>
					<div class="sale-price"><span>10%</span></div>
					<img data-id="6" class="cart-onclick wishlist-img" src="./img/dong-ho-casio-ga-110gb-1adr-nam-pin-day-nhua-600x600-1.jpg" alt="">
					<div class="cart-block">
						<div class="cart-hover cartIcon"><span class="cart-hover_giohang"><i class="fas fa-shopping-cart cart-full"></i>THÊM VÀO GIỎ HÀNG</span>
						</div>
							<div class="heart_pair cart-hover">
								<span class="cart-hover_tym"><i class="far fa-heart heart heart_full"></i>YÊU THÍCH</span>
							</div>
					</div>
					<h3 data-id="6" class="cart-onclick product-header">ĐỒNG HỒ CASIO GA-110GB-1ADR NAM...</h3>
					<div class="price-carts">
						<div class="price-line">233,444,000 đ</div><div class="price-main">200,200,000 đ</div>
					</div>
				</div>		
								<div class="menu-carts watch-main__product" >
					<div class="menu-carts__lable"><p>NEW!</p></div>
					<div class="sale-price"><span>11%</span></div>
					<img data-id="7" class="cart-onclick wishlist-img" src="./img/dong-ho-casio-la670wl-1bdf-nu-pin-day-da-600x600-1.jpg" alt="">
					<div class="cart-block">
						<div class="cart-hover cartIcon"><span class="cart-hover_giohang"><i class="fas fa-shopping-cart cart-full"></i>THÊM VÀO GIỎ HÀNG</span>
						</div>                    
						<div class="heart_pair cart-hover">
							<span class="cart-hover_tym"><i class="far fa-heart heart heart_full"></i>YÊU THÍCH</span>
						</div>
					</div>
					<h3 data-id="7" class="cart-onclick product-header">ĐỒNG HỒ CASIO LA670WL-1BDF NỮ PIN...</h3>
					<div class="price-carts">
						<div class="price-line">851,000 ₫ </div><div class="price-main">766,000 ₫</div>
					</div>
				</div>				
			</div>
</div>		
</div>
			`;
			cartMain.classList.add('unshow')
			homes.classList.add('unshow')
			}
			const cartReload = document.querySelector('.cart-js-reload');
			if (cartReload) {
				cartReload.addEventListener('click', function() {
					reload()
					window.scrollTo(0, 0); // Example functionality: scroll to top
				});
			}
			function addToCart(productCart) {
				let productTitle = productCart.querySelector('.js-header').textContent;
				let productImage = productCart.querySelector('.js-img').src;
				let productPriceNew = productCart.querySelector('.js-priceNew').textContent
				let productPriceOld = productCart.querySelector('.js-priceOld').textContent
				// Tạo một mục mới để hiển thị thông tin của cuốn sách trong danh sách yêu thích
				let newFavoriteBook = document.createElement('li');
				newFavoriteBook.innerHTML = `
					<div class="wish-list__main">
					<img src="${productImage}" alt="${productTitle}"> 
					<div>
					<p>${productTitle}</p>
					<div>
					<span class="price-line">${productPriceOld}</span>
					<span>${productPriceNew}</span>
					</div>
					</div>
					</div>
				`;
				// Thêm cuốn sách vào danh sách yêu thích
				document.querySelector('.menu-cart').appendChild(newFavoriteBook);
			}
			function removeFromCart(productImage) {
				let favoriteBooksList = document.querySelector('.menu-cart');
				let favoriteBookToRemove = favoriteBooksList.querySelector(`li img[src="${productImage}"]`).closest('li');
				// Xóa cuốn sách khỏi danh sách yêu thích
				favoriteBooksList.removeChild(favoriteBookToRemove);
			}
			let cartButtons = document.querySelectorAll('.cartIcon')
			let imgCartEmpty = document.querySelector('.menu-cart__empty')
			let cartNbMain = document.querySelector('.badge-cart')
			let priceCart = document.querySelector('.menu-cart-checkout__price')
			let cartNumber = document.querySelector('.menu-cart__number')
			cartButtons.forEach(function(button){
				button.addEventListener('click',function(){
				let cartElement = this.closest('.cart-js');
				let cartPrice = parseFloat(cartElement.querySelector('.js-priceNew').innerText.replace(/,/g, '').replace(' ₫', ''));
				let cartImage = cartElement.querySelector('.js-img').src;
				if (this.classList.contains('cart-full')) {
					this.classList.remove('cart-full')
					removeFromCart(cartImage)
					count--
					total-=cartPrice
				}
				else {
					this.classList.add('cart-full')
					addToCart(cartElement)
					console.log(cartPrice)
					count++
					total+=cartPrice
				}
				updateCartDisplay()
			})
			})
			function updateCartDisplay() {
				let formattedTotal = formatCurrency(total);
				cartNbMain.textContent = count;
				cartNumber.textContent = count;
					priceCart.textContent = formattedTotal;
				if (count !== 0) {
					imgCartEmpty.style.display = 'none';
				} else {
					imgCartEmpty.style.display = 'block';
				}
			}
			function formatCurrency(value) {
				// Sử dụng toFixed để làm tròn giá trị đến 2 chữ số thập phân
				let roundedTotal = Math.round(value * 1) / 1000;
				let formattedTotal = roundedTotal.toFixed(3);
				
				// Thêm dấu phẩy ngăn cách giữa các nhóm 3 chữ số
				formattedTotal = formattedTotal.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
				
				return formattedTotal;
			}
			
	});
});
//thay đổi màu nút tym khi con click
document.addEventListener('DOMContentLoaded', function() {
    let heartPairs = document.querySelectorAll('.heart_pair');
    let hearts = [...heartPairs];
    hearts.forEach(function(pair) {
        let fullHeart = pair.querySelector('.heart_full');
        fullHeart.onclick = function() {
            if (fullHeart.style.color === '') {
                fullHeart.style.color = 'rgb(201, 32, 60)'; // Thêm màu đỏ khi được nhấp
            } else {
                fullHeart.style.color = ''; // Đặt lại màu chữ mặc định
            }
        }
    });
});
// Hàm để thêm sách vào danh sách yêu thích
function addToFavorites(productElement) {
    let productTitle = productElement.querySelector('.product-header').textContent;
    let productImage = productElement.querySelector('.wishlist-img').src;
	let productPriceNew = productElement.querySelector('.price-main').textContent
	let productPriceOld = productElement.querySelector('.price-line').textContent
    // Tạo một mục mới để hiển thị thông tin của cuốn sách trong danh sách yêu thích
    let newFavoriteBook = document.createElement('li');
    newFavoriteBook.innerHTML = `
		<div class="wish-list__main">
        <img src="${productImage}" alt="${productTitle}"> 
		<div>
        <p>${productTitle}</p>
		<div>
        <span class="price-line">${productPriceOld}</span>
        <span>${productPriceNew}</span>
		</div>
		</div>
		</div>
    `;
    // Thêm cuốn sách vào danh sách yêu thích
    document.querySelector('.favorite-product').appendChild(newFavoriteBook);
}
// Hàm để xóa sách khỏi danh sách yêu thích
function removeFromFavorites(productImage) {
    let favoriteBooksList = document.querySelector('.favorite-product');
    let favoriteBookToRemove = favoriteBooksList.querySelector(`li img[src="${productImage}"]`).closest('li');
    // Xóa cuốn sách khỏi danh sách yêu thích
    favoriteBooksList.removeChild(favoriteBookToRemove);
}
// Lấy tất cả các nút tim trong trang
let heartButtons = document.querySelectorAll('.heart');
// Lặp qua từng nút tim và thêm xử lý sự kiện click
heartButtons.forEach(button => {
    button.addEventListener('click', function() {
        let productElement = this.closest('.watch-main__product');
        let productImage = productElement.querySelector('.wishlist-img').src;

        // Kiểm tra trạng thái hiện tại của nút tim (đã được yêu thích hay chưa)
        if (this.classList.contains('heart_full')) {
            this.classList.remove('heart_full');         
            // Thêm cuốn sách vào danh sách yêu thích
            addToFavorites(productElement);
        } else {
            // Nếu đã được yêu thích, hãy xóa khỏi danh sách yêu thích bằng cách loại bỏ class 'heart_full'
            this.classList.add('heart_full');
            removeFromFavorites(productImage);
        }
    });
});
// giỏ hàng
function addToCart(productCart) {
    let productTitle = productCart.querySelector('.product-header').textContent;
    let productImage = productCart.querySelector('.wishlist-img').src;
	let productPriceNew = productCart.querySelector('.price-main').textContent
	let productPriceOld = productCart.querySelector('.price-line').textContent
    // Tạo một mục mới để hiển thị thông tin của cuốn sách trong danh sách yêu thích
    let newFavoriteBook = document.createElement('li');
    newFavoriteBook.innerHTML = `
		<div class="wish-list__main">
        <img src="${productImage}" alt="${productTitle}"> 
		<div>
        <p>${productTitle}</p>
		<div>
        <span class="price-line">${productPriceOld}</span>
        <span>${productPriceNew}</span>
		</div>
		</div>
		</div>
    `;
    // Thêm cuốn sách vào danh sách yêu thích
    document.querySelector('.menu-cart').appendChild(newFavoriteBook);
}
function removeFromCart(productImage) {
    let favoriteBooksList = document.querySelector('.menu-cart');
    let favoriteBookToRemove = favoriteBooksList.querySelector(`li img[src="${productImage}"]`).closest('li');
    // Xóa cuốn sách khỏi danh sách yêu thích
    favoriteBooksList.removeChild(favoriteBookToRemove);
}
let cartButtons = document.querySelectorAll('.cartIcon')
let imgCartEmpty = document.querySelector('.menu-cart__empty')
let cartNbMain = document.querySelector('.badge-cart')
let priceCart = document.querySelector('.menu-cart-checkout__price')
let total = 0
let count = 0
let cartNumber = document.querySelector('.menu-cart__number')
cartButtons.forEach(function(button){
	button.addEventListener('click',function(){
	let cartElement = this.closest('.watch-main__product');
	let cartPrice = parseFloat(cartElement.querySelector('.price-main').innerText.replace(/,/g, '').replace(' ₫', ''));
    let cartImage = cartElement.querySelector('.wishlist-img').src;
	if (this.classList.contains('cart-full')) {
		this.classList.remove('cart-full')
		removeFromCart(cartImage)
		count--
		total-=cartPrice
	}
	else {
		this.classList.add('cart-full')
		addToCart(cartElement)
		console.log(cartPrice)
		count++
		total+=cartPrice
	}
	updateCartDisplay()
})
})
function updateCartDisplay() {
	let formattedTotal = formatCurrency(total);
    cartNbMain.textContent = count;
    cartNumber.textContent = count;
        priceCart.textContent = formattedTotal;
    if (count !== 0) {
        imgCartEmpty.style.display = 'none';
    } else {
        imgCartEmpty.style.display = 'block';
    }
}
function formatCurrency(value) {
    // Sử dụng toFixed để làm tròn giá trị đến 2 chữ số thập phân
    let roundedTotal = Math.round(value * 1) / 1000;
    let formattedTotal = roundedTotal.toFixed(3);
    
    // Thêm dấu phẩy ngăn cách giữa các nhóm 3 chữ số
    formattedTotal = formattedTotal.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    return formattedTotal;
}

//thay đổi màu cart khi con click
document.addEventListener('DOMContentLoaded', function() {
    let cartPairs = document.querySelectorAll('.cart-pair');
    let carts = [...cartPairs];
    carts.forEach(function(cart) {
        let fullCart = cart.querySelector('.cart-full');
        fullCart.onclick = function() {
            if (fullCart.style.color === '') {
                fullCart.style.color = 'rgb(201, 32, 60)'; // Thêm màu đỏ khi được nhấp
            } else {
                fullCart.style.color = ''; // Đặt lại màu chữ mặc định
            }
        }
    });
});
// tắt bật wishlist
let wishListIcon = document.querySelector('.menu-wistlist-icon');
let wishListClose = document.querySelector('.wishlist-close');
let wishList = document.querySelector('.favorite-product');

wishListIcon.onclick = function() {
    wishList.classList.add('favorite-product__active');
}

wishListClose.onclick = function() {
    // Khi nhấp vào nút close, chúng ta sẽ thực hiện việc chuyển đổi hiệu ứng
    wishList.style.animation = 'left-right 1s ease forwards';

    // Sau khi hiệu ứng hoàn thành, chúng ta sẽ xóa lớp 'search-active'
    setTimeout(function() {
        wishList.classList.remove('favorite-product__active');
        wishList.style.animation = ''; // Xóa hiệu ứng để chuẩn bị cho lần tiếp theo
    }, 500); // Chờ 500ms (thời gian của hiệu ứng) trước khi xóa lớp 'search-active'
}
// load lại trang
function reload() {
	location.reload()
}
