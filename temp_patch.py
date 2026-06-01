from pathlib import Path

pages = [
    'children-development',
    'environment',
    'disaster',
    'health',
    'women-empowerment',
    'youth-empowerment',
]

old_aims = '''
                  As women’s education volunteer, you’ll help ViN meet these

                  goals:

                </p>

              </div>



              {/* Content Box */}

              <div

                id="roles"

                className="rounded-[10px] bg-[#D9F0FB] px-6 py-2 scroll-mt-24"

              >

                [

                  "Deliver practical literacy and numeracy classes—from reading signs and medicine labels to budgeting and basic math.",

                  "Teach digital skills, including using a mobile phone, messaging, and searching for information online.",

                  "Lead life skills sessions—from assertive communication and emotional intelligence to goal-setting and problem-solving.",

                  "Guide leadership skills workshops",

                  "Facilitate discussions on rights, gender equality, and legal awareness to promote understanding and awareness",

                  "Introduce women-focused education initiatives, such as setting up mini-libraries, mentoring circles, or women-led clubs.",

                  "Support community-based women’s education—with all lessons and resources designed to be sustainable, even after volunteers leave.",

                  "Involve men and boys as allies in volunteer programs that promote true gender equality.",

                  "Train peer educators to multiply the impact of every woman’s education through NGO volunteer efforts",

                ].map((item, index) => (

'''

old_nested = '''
                      {index === 3 ; (

                        <ul className="mt-1 ml-5 list-disc space-y-1 text-[15px] leading-[28px] text-[#475467]">

                          <li>Strategic planning and visionary thinking</li>

                          <li>Verbal and non-verbal communication</li>

                          <li>Active listening and critical thinking</li>

                          <li>Assertive decision-making</li>

                          <li>

                            Adaptability, resilience, and self-development

                          </li>

                          <li>Conflict resolution and negotiation</li>

                          <li>Influence, motivation, and empowerment</li>

                        </ul>

                      )}

'''

replacements = {
    'children-development': {
        'aims': '''                <p className="mt-2 text-[16px] leading-[24px] text-[#6E7485]">
                  As a children’s development volunteer, you’ll help ViN meet these
                  goals:
                </p>
              </div>

              {/* Content Box */}
              <div id="roles" className="rounded-[10px] bg-[#D9F0FB] px-6 py-2 scroll-mt-24">
                {[
                  "Deliver early childhood learning activities, play-based education and tutoring for children.",
                  "Support reading, numeracy and storytelling sessions in schools and community centers.",
                  "Create safe play spaces and mentoring circles for local children.",
                  "Guide parents and caregivers on child health, hygiene and nutrition.",
                  "Teach hygiene, confidence-building, and life skills for healthy childhoods.",
                  "Support community-based child development initiatives with local partners.",
                  "Build stronger education support systems for children at school and home.",
                  "Help families increase school attendance and access to quality learning.",
                  "Train local youth mentors and caregivers to continue impact after you leave.",
                ].map((item, index) => (

''',
        'nested': '''                          {index === 3 && (
                        <ul className="mt-1 ml-5 list-disc space-y-1 text-[15px] leading-[28px] text-[#475467]">
                          <li>Child-centered planning and activity design</li>
                          <li>Empathy, listening and positive discipline</li>
                          <li>Active learning and classroom management</li>
                          <li>Participatory storytelling and games</li>
                          <li>Nurturing resilience and self-esteem</li>
                          <li>Family engagement and caregiver coaching</li>
                          <li>Child safeguarding and protection awareness</li>
                        </ul>
                      )}

''',
    },
    'environment': {
        'aims': '''                <p className="mt-2 text-[16px] leading-[24px] text-[#6E7485]">
                  As an environment conservation volunteer, you’ll help ViN meet these
                  goals:
                </p>
              </div>

              {/* Content Box */}
              <div id="roles" className="rounded-[10px] bg-[#D9F0FB] px-6 py-2 scroll-mt-24">
                {[
                  "Plant trees, restore watersheds and protect fragile ecosystems.",
                  "Lead waste reduction, recycling and clean-up campaigns.",
                  "Support sustainable agriculture and permaculture demonstrations.",
                  "Coordinate river, forest and trail protection activities.",
                  "Deliver environmental education for schools and local communities.",
                  "Help monitor biodiversity and natural resource health.",
                  "Promote climate adaptation and resilient community practices.",
                  "Support renewable energy, water-saving and sustainable farming efforts.",
                  "Train local eco-leaders and conservation volunteers to keep work going.",
                ].map((item, index) => (

''',
        'nested': '''                          {index === 3 && (
                        <ul className="mt-1 ml-5 list-disc space-y-1 text-[15px] leading-[28px] text-[#475467]">
                          <li>Ecosystem restoration and habitat care</li>
                          <li>Community outreach and awareness-raising</li>
                          <li>Practical conservation planning and execution</li>
                          <li>Local stakeholder coordination</li>
                          <li>Hands-on environmental stewardship</li>
                          <li>Behavior change and resource management</li>
                          <li>Long-term sustainability partnerships</li>
                        </ul>
                      )}

''',
    },
    'disaster': {
        'aims': '''                <p className="mt-2 text-[16px] leading-[24px] text-[#6E7485]">
                  As a disaster risk reduction volunteer, you’ll help ViN meet these
                  goals:
                </p>
              </div>

              {/* Content Box */}
              <div id="roles" className="rounded-[10px] bg-[#D9F0FB] px-6 py-2 scroll-mt-24">
                {[
                  "Support hazard mapping and community emergency drills.",
                  "Teach flood, earthquake and landslide awareness to local families.",
                  "Help establish early warning systems and evacuation planning.",
                  "Lead resilience workshops for schools, households and volunteers.",
                  "Coordinate preparedness training and first aid basics.",
                  "Support recovery planning after disasters and community rebuilding.",
                  "Strengthen local disaster response networks and coordination.",
                  "Promote safer housing, climate-smart agriculture and risk reduction.",
                  "Train community volunteers in disaster readiness and resilience.",
                ].map((item, index) => (

''',
        'nested': '''                          {index === 3 && (
                        <ul className="mt-1 ml-5 list-disc space-y-1 text-[15px] leading-[28px] text-[#475467]">
                          <li>Community risk assessment and planning</li>
                          <li>Preparedness education and communication</li>
                          <li>Emergency coordination and resilience building</li>
                          <li>Local stakeholder collaboration</li>
                          <li>Practical response readiness and training</li>
                          <li>Recovery support and long-term adaptation</li>
                          <li>Local volunteer mobilization and leadership</li>
                        </ul>
                      )}

''',
    },
    'health': {
        'aims': '''                <p className="mt-2 text-[16px] leading-[24px] text-[#6E7485]">
                  As a public health and medical volunteer, you’ll help ViN meet these
                  goals:
                </p>
              </div>

              {/* Content Box */}
              <div id="roles" className="rounded-[10px] bg-[#D9F0FB] px-6 py-2 scroll-mt-24">
                {[
                  "Support health camps, clinics and community wellness outreach.",
                  "Help deliver hygiene, nutrition and sanitation education.",
                  "Assist local staff with patient care and referral support.",
                  "Run awareness sessions on disease prevention and healthy living.",
                  "Support mental health, maternal health and child wellness programs.",
                  "Promote clean water, sanitation and infection prevention.",
                  "Help track health data and improve local clinic services.",
                  "Build stronger community health networks and volunteer teams.",
                  "Train local health promoters and support preventive care activities.",
                ].map((item, index) => (

''',
        'nested': '''                          {index === 3 && (
                        <ul className="mt-1 ml-5 list-disc space-y-1 text-[15px] leading-[28px] text-[#475467]">
                          <li>Health awareness and education planning</li>
                          <li>Patient communication and community outreach</li>
                          <li>Practical organisation and supportive care skills</li>
                          <li>Community partnership and wellbeing promotion</li>
                          <li>Hygiene, nutrition and preventive health coaching</li>
                          <li>Empathy, active listening and respect for patients</li>
                          <li>Local health systems support and collaboration</li>
                        </ul>
                      )}

''',
    },
    'women-empowerment': {
        'aims': '''                <p className="mt-2 text-[16px] leading-[24px] text-[#6E7485]">
                  As a women’s empowerment volunteer, you’ll help ViN meet these
                  goals:
                </p>
              </div>

              {/* Content Box */}
              <div id="roles" className="rounded-[10px] bg-[#D9F0FB] px-6 py-2 scroll-mt-24">
                {[
                  "Support women’s education, leadership and confidence-building activities.",
                  "Help run vocational skill training and entrepreneurship workshops.",
                  "Create safe spaces for women to connect, learn and grow.",
                  "Facilitate sessions on rights, health and financial inclusion.",
                  "Encourage peer mentorship and community-led women’s groups.",
                  "Support gender equality awareness across households and schools.",
                  "Help women access resources, networks and local support services.",
                  "Build women’s voices through leadership and advocacy initiatives.",
                  "Train local women leaders and volunteers for ongoing impact.",
                ].map((item, index) => (

''',
        'nested': '''                          {index === 3 && (
                        <ul className="mt-1 ml-5 list-disc space-y-1 text-[15px] leading-[28px] text-[#475467]">
                          <li>Empowerment through skills and confidence</li>
                          <li>Gender rights awareness and community partnerships</li>
                          <li>Economic inclusion and livelihoods support</li>
                          <li>Positive leadership and peer mentoring</li>
                          <li>Health, safety and well-being education</li>
                          <li>Respect, collaboration and cultural sensitivity</li>
                          <li>Women-led change and local ownership</li>
                        </ul>
                      )}

''',
    },
    'youth-empowerment': {
        'aims': '''                <p className="mt-2 text-[16px] leading-[24px] text-[#6E7485]">
                  As a youth empowerment volunteer, you’ll help ViN meet these
                  goals:
                </p>
              </div>

              {/* Content Box */}
              <div id="roles" className="rounded-[10px] bg-[#D9F0FB] px-6 py-2 scroll-mt-24">
                {[
                  "Mentor young people through leadership, life skills and confidence-building activities.",
                  "Support vocational training, digital literacy and career guidance.",
                  "Create safe youth spaces for discussion, teamwork and creativity.",
                  "Lead sessions on goal-setting, communication and active citizenship.",
                  "Encourage young people to explore education and entrepreneurship.",
                  "Support youth-led community service and peer mentoring projects.",
                  "Help build stronger school-to-work pathways and youth networks.",
                  "Promote resilience, problem-solving and positive decision-making.",
                  "Train local youth leaders and volunteer teams for ongoing impact.",
                ].map((item, index) => (

''',
        'nested': '''                          {index === 3 && (
                        <ul className="mt-1 ml-5 list-disc space-y-1 text-[15px] leading-[28px] text-[#475467]">
                          <li>Leadership and teamwork development</li>
                          <li>Communication and positive goal-setting</li>
                          <li>Creative problem solving and critical thinking</li>
                          <li>Peer mentoring and community involvement</li>
                          <li>Confidence-building and self-expression</li>
                          <li>Career awareness and planning</li>
                          <li>Resilience and healthy decision-making</li>
                        </ul>
                      )}

''',
    },
}

for name in pages:
    path = Path(f'app/program/{name}/page.tsx')
    text = path.read_text(encoding='utf-8').replace('\r\n', '\n')
    replaced = False
    if old_aims in text:
        text = text.replace(old_aims, replacements[name]['aims'])
        replaced = True
    else:
        print(f'{name}: aims block not found')
    if old_nested in text:
        text = text.replace(old_nested, replacements[name]['nested'])
        replaced = True
    else:
        print(f'{name}: nested block not found')
    if replaced:
        path.write_text(text.replace('\n', '\r\n'), encoding='utf-8')
        print(f'{name}: updated')
