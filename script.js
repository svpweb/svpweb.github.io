///-------------------------------------------------------///
///---------- Daily Content for Advent Calendar ----------///
///-------------------------------------------------------///
const promotions = {
	1: {
		//Welcome - Donate Push
		heading: "Help keep the Doors of Hope open this Christmas🎄",
		text: "1st December 2024",
		image: "Images/Doors/door1.jpg",
		description: `
		<p><b>The SVP is truly grassroots, and we are proud to offer a wide range of support for anyone living in crisis.</b></p>
		<p> We make it our mission to be there, in-person, and tailor our services to the needs of each person that comes through our doors. 💙</p>
		<p><b>For so many people and families, Christmas can be a tough and very isolating and even hopeless time.</b></p>
		<p> Your generosity can help members and staff to provide urgent assistance and keep the doors of hope open by offering people support and comfort – for as long as they need it. 🩵</p>`,
		link: "http://fundraising.svp.org.uk/doorsofhope ",
		linkText: "Donate now", // New link text
	},
	2: {
		heading: "It's not too late to Shop for Christmas!🎅🏽",
		text: "2nd December! 2024",
		image: "Images/Doors/door2.png",
		description: `
		<p><b>Still looking for the perfect gift? 🛍️ Visit the SVP’s online store to find beautiful Christmas cards, thoughtful presents, and more.</b></p>
		<p>Every purchase helps support our vital work, spreading hope and joy this festive season.</p>`,
		link: "https://stvincentsshops.com/",
		linkText: "Shop now", // New link text
	},
	3: {
		heading: "Creating Change - Mrs Chana's Story 💙",
		text: "3rd December 2024",
		image: "Images/Doors/door3.jpg",
		description: `
		<p><b>Following the passing of her husband a few years ago, Mrs Chana became suddenly swamped in debt she had no knowledge of and could not overcome alone. Our friendly team and financial experts at Bradford helped paved the way for her to slowly manage a difficult debt crisis.</b></p>
		<p>Now, Mrs Chana has recovered some stability, despite the loss of her husband, and from now on wants to be happy by giving back to the community that helped her in her time of great need.</p>`,
		link: "https://youtu.be/PqJ4sGe7fv8?si=GTdF97eqq2HBmL6r",
		linkText: "Watch Mrs Chana's Story", // New link text
	},
	4: {
		//Membership
		heading: "Fancy becoming a Member of the SVP? ❤️",
		text: "4th December 2024",
		image: "Images/Doors/door4.jpg",
		description: `
			<p><b>The dedicated work of members on the ground is essential to the SVP’s mission.</b></p>
			<p>The Our Lady of Sorrows conference in Bognor Regis actively serves their community by supporting homeless individuals, aiding local schools, and providing assistance to children with special needs.</p>`,
		link: "https://svp.org.uk/membership-new",
		linkText: "Learn more about Membership", // New link text
	},
	5: {
		//CSP - Bradford
		heading: "St Vincent's Bradford - Social Enterprise 💚",
		text: "5th December!",
		image: "Images/Doors/door5.jpg",
		description: `
		<p><b>St Vincent’s Bradford is a vibrant community centre dedicated to supporting local residents with a wide range of services.</b></p>
		<p>Its outdoor garden, which features a greenhouse, serves as a place of calm for individuals where they can get stuck in and be outdoors.</p>`,
		link: "https://svp.org.uk/st-vincents-bradford",
		linkText: "Learn more about St Vincent's Bradford",
	},
	//CHANGE
	6: {
		//Twinning - Sudan
		heading: "Twinning - Making a change across the world! 🌍",
		text: "6th December 2024",
		image: "Images/Doors/door6.png",
		description: `
		<p><b>Twinning is the way in SVP England and Wales partners with SVP groups in other countries to provide support.</b></p>
		<p>We are currently “twinned” with the SVP in India, Sudan, South Sudan, Grenada, Guyana and Romania. Each country team tailors their work to the needs of the local community.</p>`,
		link: "https://svp.org.uk/twinning-and-overseas-aid",
		linkText: "Learn more about Twinning", // New link text
	},
	7: {
		//CSP - Brighton Tower House
		heading: "St Vincent's Brighton (Tower House) 💙",
		text: "7th December 2024",
		image: "Images/Doors/door7.jpg",
		description: `
		<p><b>Tower House caters for the older community in the Brighton area.</b> The place is alive with services and activities to support people growing older.</p>
		<p>There is everything from craft groups, dementia care, carers groups and services to encourage good health and wellbeing.</p>`,
		link: "https://svp.org.uk/st-vincents-centre-brighton-tower-house",
		linkText: "Learn more about St Vincent's Brighton", // New link text
	},
	8: {
		// CSP - Deaf Centre
		heading: "Newcastle Deaf Centre - SVP 💙",
		text: "8th December 2024",
		image: "Images/Doors/door8.jpg",
		description: `
			<p><b>The Deaf Centre is a wonderful, inclusive centre with activities offered to deaf, hard of hearing and hearing communities.</b></p>
			<p>These include advice and employability sessions, art groups and enrichment scheme during holidays for children, teens, and families.</p>`,
		link: "https://svp.org.uk/st-vincents-centre-brighton-tower-house",
		linkText: "Learn more about SVP Brighton", // New link text
	},
	9: {
		heading: "SHOP - Dudley Hill",
		text: "9th December 2024",
		image: "Images/Doors/door7.jpg",
		description: `
			<p><b>Tower House caters for the older community in the Brighton area.</b></p>
			<p>The place is alive with services and activities to support people growing older. There is everything from craft groups, dementia care, carers groups and services to encourage good health and wellbeing.</p>`,
		link: "https://svp.org.uk/st-vincents-centre-brighton-tower-house",
		linkText: "Learn more about SVP Brighton", // New link text
	},
	10: {
		heading: "St Vincent's Southend 💙",
		text: "10th December 2024",
		image: "Images/Doors/door10.jpeg",
		description: `
			<p><b>St Vincent's Southend is a place of Help, Hope and Opportunity which Turns Concerns into Action.</b></p>
			<p>The centre is open to all, with a focus on Support, Healing, Empowerment and Community. Many that come to the centre are living on the streets or they are struggling families and individuals.<p>
			<p>The centre supports in a range of ways including crisis support, basic needs, mental health, skill development and community engagement.</p>`,
		link: "https://svp.org.uk/st-vincents-southend",
		linkText: "Learn more about St Vincent's Southend", // New link text
	},
	11: {
		heading: "St Vincent's Leeds 💙",
		text: "11th December 2024",
		image: "Images/Doors/door11.jpg",
		description: `
			<p><b>At St Vincent's Centre and Furniture Depot in LS9, East Leeds, we provide more than just furniture.</b></p>
			<p>Our centre is a hub of support, offering debt advice, immigration help, counselling, education programme, community groups all alongside our community café and shop.</p>`,
		link: "https://svp.org.uk/stvincentsleeds",
		linkText: "Learn more about St Vincent's Leeds", // New link text
	},
	12: {
		heading: "Chorley Buddies - SVP 💙",
		text: "12th December 2024",
		image: "Images/Doors/door12.jpeg",
		description: `
			<p><b>Chorley Buddies offer 4 food clubs each week in community venues.</b> They are a great way to stretch budgets, get great fresh and tinned food and make sure food does not end up in landfill.</p>
			<p>There are also activities provided for individuals and families that join the community together and provide a space to try new things and make new friends.</p>`,
		link: "https://svp.org.uk/microsite/st-vincents-chorley-buddies",
		linkText: "Learn more about SVP Brighton", // New link text
		// Continue adding entries up to day 25
	},
	13: {
		heading: "Youth - Mini Vinnies 🚀",
		text: "8th December 2024",
		image: "Images/Doors/door13.jpg",
		description: `
			<p><b>The Mini Vinnies are the youngest members of the St Vincent de Paul Society (SVP)</b>, living out their mission of 'see, think, do' to tackle poverty in all its forms by providing practical assistance to people in need in their community.<p>
			<p><b>They are our future!✨</b>`,
		link: "https://svp.org.uk/mini-vinnies",
		linkText: "Learn more about Mini Vinnies", // New link text
	},
	14: {
		heading: "Social Justice - Migrants and Refugees 🧡",
		text: "14th December 2024",
		image: "Images/Doors/door14.png",
		description: `
			<p><b>Every year the SVP supports thousands of refugees and people seeking asylum.</b></p>
			<p>In addition to providing material and practical support, we campaign for a compassionate and humane asylum system. Through our advocacy work, we challenge unjust polices and systems.</p>`,
		link: "https://svp.org.uk/st-vincents-centre-brighton-tower-house",
		linkText:
			"Learn more about our Social Justice work with Migrants and Refugees", // New link text
	},
	15: {
		heading: "Shops - Leeds Seacroft 🩵",
		text: "15th December 2024",
		image: "Images/Doors/door15.jpeg",
		description: `
			<p><b>St Vincent’s Shop Seacroft  is one of over 50 St Vincent’s shops</b>, raising funds to support the SVP in its mission to help those in need.</p>
			<p>By donating or shopping at our shops, you’re contributing to vital work that brings comfort and support to those facing challenging times.</p>`,
		link: "https://svp.org.uk/shop",
		linkText: "Learn more about St Vincent's Shops", // New link text
	},
	16: {
		heading: "St Vincent's Newcastle 💙",
		text: "16th December 2024",
		image: "Images/Doors/door16.png",
		description: `
			<p><b>Based in Byker, the centre is a hive of activity.</b> With always something going on - art groups, friendship club, a brilliant marketplace on Thursdays.</p>
			<p>Every Tuesday a hearty, free meal is served  to nearly 200 people.🍲</p>`,
		link: "https://svp.org.uk/st-vincents-newcastle",
		linkText: "Learn more about St Vincent's Newcastle", // New link text
	},
	17: {
		heading: "Debt Advice - why Luke loves helping our Beneficiaries💛",
		text: "17th December 2024",
		image: "Images/Doors/door17.jpg",
		description: `
				<p><b>Luke is one our top debt advisors at SVP who tells us about the vital work he does and sees first-hand with individuals who come to us for help. </b></p>
				<p>If there is any way we can help people get control over their lives again to make that weight on their shoulders drop off, then we can, and Luke shares with us how rewarding that can be.</p>`,
		link: "https://youtu.be/APFgtWANpBg?si=6z_2O6GVmNRVzwnC",
		linkText: "Watch the video", // New link text
	},
	18: {
		heading: "Supported Housing 🏠",
		text: "18th December 2024",
		image: "Images/Doors/door18.jpg",
		description: `
		<p><b>Our temporary and emergency accommodation provides warm, safe and welcoming homes for families who are homeless. Every family has a story behind their homelessness, they may have fled violence or abused, had financial problems or experienced a family breakdown.</b></p>
		<p>The experience that has led to homelessness is often particular difficult for children. All our properties provide space for to children play, learn and develop.🏠 </p>`,
		link: "http://fundraising.svp.org.uk/doorsofhope",
		linkText: "Donate now to help us continue to help Families in need", // New link text
	},
	19: {
		heading: "Sheffield Furniture Project - SVP 💙",
		text: "19th December 2024",
		image: "Images/Doors/door19.jpeg",
		description: `
		<p><b>Based in Hallam, the furniture project has helped the most vulnerable in the Sheffield community for over 35 years.</b></p>
		<p> Offering donated furniture and household items to those in need to turn a house into a home. Last year, the project supported 2430 people with everything from a bed to sleep in, a chair to sit on, a kettle to make a brew with.</p>`,
		link: "https://svp.org.uk/sheffield-furniture-store",
		linkText: "Learn more about Sheffield", // New link text
		// Continue adding entries up to day 25
	},
	20: {
		heading: "Social Justice - Fighting for Change 🧡",
		text: "20th December 2024",
		image: "Images/Doors/door20.jpg",
		description: `
		<p><b>Social justice is at the core of our mission.</b>We use our insight and experience on the ground to find solutions to complex policy problems affecting people.</p>
		<p>We work with the Government and other groups to tackle the root causes of poverty and campaign for a more just system.</p>`,
		link: "https://svp.org.uk/social-justice-svp",
		linkText: "Learn more about our Social Justice  in the UK", // New link text
	},
	21: {
		heading: "St Vincent's Ely Bridge 💙",
		text: "21st December 2024",
		image: "Images/Doors/door21.jpg",
		description: `
			<p><b>St Vincent's Ely Bridge is a thriving community centre that supports the community of Ely, and those in the surrounding areas.</b></p>
			<p>The centre offers a range of activities and groups, including wellbeing walks, The Creative Hub, Lunch and Laugh, Beyond Differences, and Men Changing Lives which supports people with mental health issues, addiction and those struggling with loneliness.</p>`,
		link: "https://svp.org.uk/microsite/st-vincents-ely-bridge",
		linkText: "Learn more about St Vincent's Ely Bridge", // New link text
	},
	22: {
		heading: "Youth SVP - 1833 🚀",
		text: "22nd December 2024",
		image: "Images/Doors/door22.png",
		description: `
			<p><b>Youth SVP</b>, part of the St Vincent de Paul Society, unites young members in schools, colleges, and parishes across England and Wales to tackle poverty and social justice issues through prayer, reflection, and community action.</p>`,
		link: "https://svp.org.uk/microsite/svp1833",
		linkText: "Learn more about Youth SVP", // New link text
	},
	23: {
		heading: "St Vincent's Brixton 💙",
		text: "23rd December 2024",
		image: "Images/Doors/door23.jpg",
		description: `
			<p><b>St Vincent’s Brixton is a vibrant community hub</b>, where people of all ages can take part in a range of arts and crafts activities including print making, sewing, creative writing and drumming.</p>
			<p>Young and old can develop skills and confidence in a safe, warm and fun environment.</p>`,
		link: "https://svp.org.uk/st-vincents-brixton",
		linkText: "Learn more about St Vincent's Brixton", // New link text
	},
	24: {
		heading: "St Vincent's Wirral 💙",
		text: "24th December 2024",
		image: "Images/Doors/door24.jpeg",
		description: `
			<p><b>St Vincent's Wirral is based in the heart of Birkenhead.</b> Its doors are open to meet the needs of the community including a food bank, clothing bank, advice  and activity sessions and a drop in cafe where people can expect a hot drink and a warm welcome.</p>`,
		link: "https://svp.org.uk/microsite/st-vincents-wirral",
		linkText: "Learn more about St Vincent's Wirral", // New link text
	},
	25: {
		heading:
			"Merry Christmas! Your Gift of Hope Can Make All the Difference.🎄",
		text: "25th December!",
		image: "Images/Doors/door25.jpg",
		description: `
			<p><b>Merry Christmas! The day we’ve been waiting for is finally here! </b></p>
			<p>We want to thank you for joining us on this journey and for being part of our mission. 💙</p>
			<p>This Christmas, many people are still facing hardship and uncertainty. By donating now, you can help us continue providing support to vulnerable individuals and families, helping them face their challenges and look forward to a brighter year ahead.</p>
			`,
		link: "http://fundraising.svp.org.uk/doorsofhope ",
		linkText: "Donate now",
	},
	// Additional day entries would go here
};
///-------------------------------------------------------///
///---------- Modal Elements and Event Listeners ---------///
///-------------------------------------------------------///

// Elements for the main modal
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const modalText = document.getElementById("modal-text");
const modalLink = document.getElementById("modal-link");
const closeButton = document.querySelector(".close-btn");

// Elements for the locked door modal
const lockedDoorModal = document.getElementById("lockedDoorModal");
const closeModalBtn = document.getElementById("closeModalBtn");

///-------------------------------------------------------///
///---------- Modal Functions ----------------------------///
///-------------------------------------------------------///

/**
 * Opens the main modal with specific content based on the day clicked.
 * @param {number} day - The day number clicked.
 */
function openModal(day) {
	const promotion = promotions[day];
	if (promotion) {
		document.getElementById("modal-heading").textContent = promotion.heading;
		modalImage.src = promotion.image;
		modalText.textContent = promotion.text;
		document.getElementById("modal-description").innerHTML =
			promotion.description;
		modalLink.href = promotion.link;
		modalLink.textContent = promotion.linkText; // Set the link text
		modal.style.display = "flex";
	}
}

/**
 * Shows the locked door modal with a message if the door is not yet available.
 */
function showLockedDoorModal() {
	lockedDoorModal.style.display = "flex";
}

///-------------------------------------------------------///
///---------- Event Listeners for Modal Control ----------///
///-------------------------------------------------------///

// Close the main modal when clicking the close button
closeButton.addEventListener("click", () => {
	modal.style.display = "none";
});

// Close the locked door modal when clicking its close button
closeModalBtn.addEventListener("click", () => {
	lockedDoorModal.style.display = "none";
});

// Close the modals when clicking outside of them
window.addEventListener("click", (event) => {
	if (event.target === modal) {
		modal.style.display = "none";
	}
	if (event.target === lockedDoorModal) {
		lockedDoorModal.style.display = "none";
	}
});

///-------------------------------------------------------///
///---------- Door Event Listeners -----------------------///
///-------------------------------------------------------///

// Add event listeners to each door to handle clicks
document.querySelectorAll(".door").forEach((door) => {
	door.addEventListener("click", () => {
		const day = parseInt(door.getAttribute("data-day"), 10);
		const today = new Date().getDate();
		if (day <= today) {
			openModal(day); // Show the content for that day
		} else {
			showLockedDoorModal(); // Show the locked door message if it's not available
		}
	});
});

///-------------------------------------------------------///
///---------- Disable Right Click and Drag ---------------///
///-------------------------------------------------------///

// Disable right-click on the entire page
document.addEventListener("contextmenu", (event) => {
	event.preventDefault();
});

// Disable dragging for all buttons on the page
document.querySelectorAll("button").forEach((button) => {
	button.setAttribute("draggable", "false");
});
