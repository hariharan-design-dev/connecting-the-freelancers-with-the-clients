function openProfileModal(name, headline, avatar, location, rating, skills, bio, price, delivery, completion) {
    document.getElementById("modalName").textContent = name;
    document.getElementById("modalHeadline").textContent = headline;
    document.getElementById("modalAvatar").src = avatar;
    document.getElementById("modalLocation").textContent = location;
    document.getElementById("modalRating").textContent = rating;
    document.getElementById("modalSkills").textContent = skills;
    document.getElementById("modalBio").textContent = bio;
    document.getElementById("modalPrice").textContent = price;
    document.getElementById("modalDelivery").textContent = delivery;
    document.getElementById("modalCompletion").textContent = completion;
  
    document.getElementById("profileModal").style.display = "block";
  }
  
  function closeProfileModal() {
    document.getElementById("profileModal").style.display = "none";
  }
  function openContactModal(id, name) {
    document.getElementById("contactWriterId").value = id;
    document.getElementById("contactWriterName").textContent = name;
    document.getElementById("contactSuccess").style.display = "none";
    document.getElementById("contactForm").style.display = "block";
    document.getElementById("contactModal").style.display = "block";
  }
  
  function closeContactModal() {
    document.getElementById("contactModal").style.display = "none";
  }
  
  function submitContactForm(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
  
    fetch('contact-writer.php', {
      method: 'POST',
      body: data
    })
    .then(async res => {
      console.log('HTTP status:', res.status);
      const text = await res.text();
      console.log('Raw response:', text);
      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }
      // if you expect JSON, parse it:
      try {
        return JSON.parse(text);
      } catch {
        return text;
      }
    })
    .then(result => {
      console.log('Parsed result:', result);
      // if JSON success flag:
      if (result.success) {
        form.style.display = 'none';
        document.getElementById('contactSuccess').style.display = 'block';
      } else if (result.error) {
        alert('Error: ' + result.error);
      } else {
        // maybe it’s plain text success
        form.style.display = 'none';
        document.getElementById('contactSuccess').style.display = 'block';
      }
    })
    .catch(err => {
      console.error('Fetch error:', err);
      alert('Error sending message: ' + err.message);
    });
  }
  function openJobModal() {
    document.getElementById("jobModal").style.display = "block";
  }
  
  function closeJobModal() {
    document.getElementById("jobModal").style.display = "none";
  }
  
  function submitJobForm(event) {
    event.preventDefault();
    const form = document.getElementById("jobApplicationForm");
    const name = form.applicant_name.value;
    const email = form.applicant_email.value;
    const resume = form.resume_link.value;
  
    console.log("Job Application Submitted:", { name, email, resume });
  
    document.getElementById("jobSuccess").style.display = "block";
    form.reset();
  
    setTimeout(() => {
      closeJobModal();
      document.getElementById("jobSuccess").style.display = "none";
    }, 2000);
  }
  function openProfileModal(name, headline, avatar, skills, price, experience) {
    document.getElementById('modalName').textContent = name;
    document.getElementById('modalHeadline').textContent = headline;
    document.getElementById('modalAvatar').src = avatar;
    document.getElementById('modalSkills').textContent = skills;
    document.getElementById('modalPrice').textContent = price;
    document.getElementById('modalExperience').textContent = experience;
  
    document.getElementById('profileModal').style.display = 'flex';
  }
  function closeProfileModal() {
    document.getElementById('profileModal').style.display = 'none';
  }
  
  function openContactModal(name) {
    document.getElementById('contactName').textContent = name;
    document.getElementById('contactModal').style.display = 'flex';
  }
  function closeContactModal() {
    document.getElementById('contactModal').style.display = 'none';
  }
  
  function submitContactForm(event) {
    event.preventDefault();
    alert('Message sent successfully!');
    closeContactModal();
  }
  function openProfileModal(name, role, avatar, tags, price, exp) {
    document.getElementById('modalName').textContent = name;
    document.getElementById('modalRole').textContent = role;
    document.getElementById('modalAvatar').src = avatar;
    document.getElementById('modalTags').textContent = tags;
    document.getElementById('modalPrice').textContent = price;
    document.getElementById('modalExp').textContent = exp;
    document.getElementById('profileModal').style.display = 'flex';
  }
  
  function closeProfileModal() {
    document.getElementById('profileModal').style.display = 'none';
  }
  
  function openContactModal(name) {
    document.getElementById('contactName').textContent = name;
    document.getElementById('contactModal').style.display = 'flex';
  }
  
  function closeContactModal() {
    document.getElementById('contactModal').style.display = 'none';
  }
  
  function submitContactForm(e) {
    e.preventDefault();
    alert('Your message has been sent!');
    closeContactModal();
  }
  const usernameDisplay = document.getElementById('usernameDisplay');
  const storedName = localStorage.getItem('username');
  if (storedName) {
    usernameDisplay.textContent = storedName;
  }

  // Toggle dropdown
  const profileBtn = document.getElementById('profileBtn');
  const dropdown = document.getElementById('profileDropdown');

  profileBtn.addEventListener('click', () => {
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });

  // Logout function
  function logout() {
    localStorage.removeItem('username');
    window.location.href = 'login.html'; // After logout, redirect back
  }
  