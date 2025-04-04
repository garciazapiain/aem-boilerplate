export default async function decorate(block) {
    const resp = await fetch('/query-index.json?sheet=blog');
    const json = await resp.json();
  
    const list = document.createElement('ul');
    json.data.forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${item.path}">${item.title}</a> – ${item.description}`;
      list.appendChild(li);
    });
  
    block.appendChild(list);
  }
  