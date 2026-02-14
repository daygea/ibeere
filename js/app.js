document.addEventListener("contextmenu", function (e) {
    e.preventDefault(); // Disable right-click
});

document.addEventListener("copy", function (e) {
    e.preventDefault(); // Disable copying
});

document.addEventListener("cut", function (e) {
    e.preventDefault(); // Disable cutting
});

document.addEventListener("paste", function (e) {
    e.preventDefault(); // Disable pasting
});

document.addEventListener("keydown", function (e) {
    if (
        e.key === "F12" || 
        (e.ctrlKey && e.shiftKey && e.key === "I") || 
        (e.ctrlKey && e.shiftKey && e.key === "J") || 
        (e.ctrlKey && e.key === "U")
    ) {
        e.preventDefault(); // Disable DevTools
    }
});

setInterval(function () {
    if (window.outerWidth - window.innerWidth > 200 || window.outerHeight - window.innerHeight > 200) {
        document.body.innerHTML = "Access Denied!";
        setTimeout(function () {
            window.location.href = "about:blank"; // Redirect
        }, 1000);
    }
}, 1000);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadButtons() {
    let numbers = Array.from({ length: 16 }, (_, i) => i + 1);
    shuffleArray(numbers);

    let leftColumn = document.getElementById("leftColumn");
    let rightColumn = document.getElementById("rightColumn");
    leftColumn.innerHTML = "";
    rightColumn.innerHTML = "";

    numbers.forEach((num, index) => {
        let btn = document.createElement("button");
        btn.dataset.number = num;
        btn.onclick = () => showDivination(btn, num);
        btn.textContent = " ";
        btn.classList.add("circle-button"); // optional for styling

        if (index < 8) {
            leftColumn.appendChild(btn);
        } else {
            rightColumn.appendChild(btn);
        }
    });
}

// function showDivination(button, number) {
//     const meaning = meanings[number];

//     // Reveal number on button
//     button.textContent = number;
//     button.classList.add("reveal");

//     // Show meanings after short delay
//     setTimeout(() => {
//         document.getElementById("result").innerHTML = `
//         <center>
//             ${meaning.core}<br>
//             ${meaning.ibere}
//         </center>
//         `;
//     }, 1000);

//     // Reset button and reload after some time
//     setTimeout(() => {
//         button.textContent = " ";
//         button.classList.remove("reveal");
//         setTimeout(loadButtons, 2000);
//     }, 5000);
// }

function showDivination(button, number) {
    const meaning = meanings[number];

    // Reveal number on button
    button.textContent = number;
    button.classList.add("reveal");

    // Show meanings after short delay
    setTimeout(() => {
        const resultEl = document.getElementById("result");

        resultEl.innerHTML = `
        <center>
            ${meaning.core}<br>
            ${meaning.ibere}
        </center>
        `;

        // 🔽 Scroll to bottom after content is rendered
        resultEl.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 1000);

    // Reset button and reload after some time
    setTimeout(() => {
        button.textContent = " ";
        button.classList.remove("reveal");
        setTimeout(loadButtons, 2000);
    }, 5000);
}


const meanings = {
  1: {
    core: "Leadership, beginnings, independence, forward movement.",
    ibere: "Favorable. The path is open for journeys, success, marriage, health, and prosperity. Act boldly, but with clarity of purpose."
  },
  2: {
    core: "Partnership, balance, sensitivity, family bonds.",
    ibere: "Favorable. Prosperity, harmony, and good relationships are supported. Warning against neglect within the family—care restores balance."
  },
  3: {
    core: "Expression, creativity, communication, growth.",
    ibere: "Mixed. Energy is scattered or misdirected, causing confusion. With guidance, focus, and correction, the situation improves."
  },
  4: {
    core: "Structure, stability, discipline, foundation.",
    ibere: "Mixed. Progress is slow due to rigidity or delay. Patience and steady effort are required to unlock movement."
  },
  5: {
    core: "Expansion, change, fertility, abundance.",
    ibere: "Favorable. Wealth, growth, and increase are present. A strong sign for fertility, new ventures, and expansion."
  },
  6: {
    core: "Love, responsibility, healing, domestic harmony.",
    ibere: "Unfavorable if ignored. Indicates imbalance in care or duty. Restoration is possible through responsibility, reconciliation, and proper guidance."
  },
  7: {
    core: "Spiritual authority, wisdom, inner mastery.",
    ibere: "Favorable. Protection from powerful forces. Good for leadership, obedience to divine order, and stability within the home."
  },
  8: {
    core: "Power, wealth, karma, authority.",
    ibere: "Heavy. Great power is present but misaligned. If discipline and balance are absent, loss or danger follows. Proper alignment transforms this into success."
  },
  9: {
    core: "Completion, endings, wisdom, ancestral transition.",
    ibere: "Terminal. A matter has reached its destined conclusion. This is not punishment, but closure. Acceptance and preparation are required."
  },
  10: {
    core: "Cycles, destiny, renewal, divine timing.",
    ibere: "Favorable but brief. Opportunities appear suddenly and pass quickly. Act wisely and do not delay."
  },
  11: {
    core: "Heightened intuition, spiritual insight, revelation.",
    ibere: "Unfavorable for inquiry. Indicates blockage or spiritual refusal. The matter is not supported at this time."
  },
  12: {
    core: "Learning, sacrifice, cosmic order, karmic lessons.",
    ibere: "Mixed. Temptation and moral testing are present. Discipline and restraint prevent long-term consequences."
  },
  13: {
    core: "Transformation, death–rebirth, ancestral power.",
    ibere: "Heavy. Strong ancestral forces are active. If illness is present, urgent correction is required. Otherwise, deep transformation is underway."
  },
  14: {
    core: "Balance through movement, adaptability, moderation.",
    ibere: "Favorable. Efforts flow smoothly. Success comes through balance, flexibility, and right timing."
  },
  15: {
    core: "Attraction, magnetism, influence, harmony.",
    ibere: "Favorable. Relationships, partnerships, and collaborations prosper. What joins together here brings benefit."
  },
  16: {
    core: "Spiritual awakening through collapse, inner truth.",
    ibere: "Unfavorable. Indicates separation or disruption caused by unresolved past ties. Awareness and detachment are required for growth."
  }
};

// Initialize buttons on page load
loadButtons();
