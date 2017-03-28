(function(d) {
  const url = window.location;
  const groups = d.querySelectorAll('.c-shareButtons');
  if (groups.length) {
    for (let group of groups) {
      const twitter = group.querySelector('.twitter button');
      twitter.addEventListener('click', tweet);

      const facebook = group.querySelector('.facebook button');
      facebook.addEventListener('click', fbShare);
    }
  }

  function tweet() {
    window.open(`https://twitter.com/intent/tweet?text=${d.title} en @LaSillaVacia&url=${url}`,
      '_blank',
      'toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=600, height=450');
  }

  function fbShare() {
    FB.init({
      appId: '707991449304858',
      status: true,
      xfbml: true,
      version: 'v2.4' // or v2.0, v2.1, v2.2, v2.3
    });

    FB.ui({
        // ID de la cuenta de Jerrejerre, cambiar por la de LSV
        // app_id: "866382070105753",
        app_id: '707991449304858',
        method: 'feed',
        link: url,
        name: d.title
      },
      (response) => {

        /* if (response && response.post_id) {
         alert('Post was published.');
         } else {
         alert('Post was not published.');
         }*/
      });
  }
})(document);
