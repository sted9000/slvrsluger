from pathlib import Path
import datetime
import os

Path = Path('.')
author = 'slvrsluger'
now = datetime.datetime.now()
date = now.strftime('%Y-%m-%d')
layout = 'blog'
sizes = ['5cards']
hand_number = str(1 + len([name for name in os.listdir(Path / 'hand-of-the-day' / '_posts') if os.path.isfile(os.path.join(Path / 'hand-of-the-day' / '_posts', name))]) + len([name for name in os.listdir(Path / 'hand-of-the-day' / '_drafts') if os.path.isfile(os.path.join(Path / 'hand-of-the-day' / '_drafts', name))]))

# type of hand of the day
type_of_hands = ['Vision Study', 'Training Video Study', 'Gambit Study', 'Fun Player', ' High Stakes', "I'm Lost", 'Forum']
for i, hand_type in enumerate(type_of_hands):
    print(str(i), ' - ', hand_type)
type_of_hand = type_of_hands[int(input('Type of hand: '))]

# situation (pre, fold, turn, river)
situations = ['pre', 'flop', 'turn', 'river']
for i, sit in enumerate(situations):
    print(str(i), ' - ', sit)
situation = situations[int(input('Situation: '))]

# pot-type (srp, 3bp, 4bp)
pot_types = ['srp', '3bp', '4bp']
for i, pot in enumerate(pot_types):
    print(str(i), ' - ', pot)
pot_type = pot_types[int(input('Pot Type: '))]

# stacks
stacks = ['short', '100bb', 'deep']
for i, stack in enumerate(stacks):
    print(str(i), ' - ', stack)
stack = stacks[int(input('Stack: '))]


# cards
if input('Enter Holecards(y/n): ') in ['', 'y']:
    holecards_list = input("Enter holecards like this Ac Ks Qd Jc: ").split(' ')
if situation in ['flop', 'turn', 'river']:
    boardcards_list = input("Enter boardcards like this Ac Ks Qs: ").split(' ')

# images string list creation
card_html_list = []
try:
    for card in holecards_list + boardcards_list:
        formatted_cards = card[0] + card[1].capitalize()
        card_html_list.append(f'/assets/cards/{formatted_cards}.svg')

except NameError:
   for card in boardcards_list:
       formatted_cards = card[0] + card[1].capitalize()
       card_html_list.append(f'/assets/cards/{formatted_cards}.svg')

# write file
f = open((Path / 'hand-of-the-day' / '_drafts' / f'hand-of-day-{hand_number}.md'), 'x')
f.write('---\n')
f.write(f'date: \n')
f.write(f'layout: {layout}\n')
f.write(f'author: {author}\n')
f.write(f'title: {type_of_hand} - Hand of the Day {hand_number}\n')
f.write('tags: ')
formated_type = type_of_hand.lower().replace(' ', '-')
f.write(f'{formated_type} ')
for i, tag in enumerate([situation, pot_type, stack]):
    if i+1 != 3: f.write(tag + ' ')
    else: f.write(tag + '\n')
f.write('---\n')
for size in sizes:
    for html_card in card_html_list:
        f.write(f'![card-image]({html_card}#{size})\n')
f.close()
