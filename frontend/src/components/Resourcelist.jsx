import React from 'react';

const ResourceList = () => {
  return (
    <div>
      <h1>Resource List for Stress, Anxiety, and Depression</h1>

      {/* Professional Support */}
      <section>
        <h2>1. Professional Support</h2>
        <ul>
          <li><strong>Mental Health Professionals:</strong> Psychiatrists, Psychologists, Therapists, Counselors, Clinical Social Workers</li>
          <li><strong>Crisis Helplines:</strong>
            <ul>
              <li>National Suicide Prevention Lifeline (U.S.): 1-800-273-TALK (8255)</li>
              <li>Crisis Text Line: Text HOME to 741741</li>
              <li>Text 4 Help (U.K.): Text 85258</li>
            </ul>
          </li>
          <li><strong>Online Therapy:</strong>
            <ul>
              <li>BetterHelp</li>
              <li>Talkspace</li>
              <li>7 Cups</li>
              <li>ReGain (Couples Therapy)</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Online Resources and Apps */}
      <section>
        <h2>2. Online Resources and Apps</h2>
        <ul>
          <li><strong>Mental Health Apps:</strong>
            <ul>
              <li>Calm (Meditation and Sleep)</li>
              <li>Headspace (Meditation)</li>
              <li>MindShift CBT (Cognitive Behavioral Therapy for Anxiety)</li>
              <li>Woebot (AI Therapy Bot)</li>
              <li>MoodKit (Mood Tracking)</li>
            </ul>
          </li>
          <li><strong>Websites:</strong>
            <ul>
              <li>Anxiety and Depression Association of America (ADAA) - <a href="https://adaa.org" target="_blank" rel="noopener noreferrer">https://adaa.org</a></li>
              <li>National Institute of Mental Health (NIMH) - <a href="https://www.nimh.nih.gov" target="_blank" rel="noopener noreferrer">https://www.nimh.nih.gov</a></li>
              <li>Mayo Clinic (Mental Health Resources) - <a href="https://www.mayoclinic.org" target="_blank" rel="noopener noreferrer">https://www.mayoclinic.org</a></li>
              <li>Psychology Today (Therapist Directory) - <a href="https://www.psychologytoday.com" target="_blank" rel="noopener noreferrer">https://www.psychologytoday.com</a></li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Peer Support and Community Resources */}
      <section>
        <h2>3. Peer Support and Community Resources</h2>
        <ul>
          <li><strong>Support Groups:</strong>
            <ul>
              <li>National Alliance on Mental Illness (NAMI) - <a href="https://nami.org" target="_blank" rel="noopener noreferrer">https://nami.org</a></li>
              <li>7 Cups Community (Anonymous peer support)</li>
              <li>Reddit Support Communities (e.g., r/depression, r/anxiety)</li>
              <li>Depression and Bipolar Support Alliance (DBSA) - <a href="https://www.dbsalliance.org" target="_blank" rel="noopener noreferrer">https://www.dbsalliance.org</a></li>
            </ul>
          </li>
          <li><strong>Online Forums:</strong>
            <ul>
              <li>PsychCentral Forums - <a href="https://forums.psychcentral.com" target="_blank" rel="noopener noreferrer">https://forums.psychcentral.com</a></li>
              <li>Mental Health Subreddits (e.g., r/stress, r/anxiety, r/depression)</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Educational Resources */}
      <section>
        <h2>4. Educational Resources</h2>
        <ul>
          <li><strong>Books on Coping with Stress, Anxiety, and Depression:</strong>
            <ul>
              <li>The Anxiety and Phobia Workbook by Edmund J. Bourne</li>
              <li>Feeling Good: The New Mood Therapy by David D. Burns</li>
              <li>The Cognitive Behavioral Therapy Workbook for Anxiety by William J. Knaus</li>
              <li>The Depression Cure by Stephen Ilardi</li>
            </ul>
          </li>
          <li><strong>Articles & Blogs:</strong>
            <ul>
              <li>AnxietyCoach (Tips and coping strategies)</li>
              <li>The Mighty (Personal stories and resources)</li>
              <li>Calm Clinic (Research-based articles on anxiety and stress)</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Physical Health and Wellness Resources */}
      <section>
        <h2>5. Physical Health and Wellness Resources</h2>
        <ul>
          <li><strong>Exercise and Stress Relief:</strong>
            <ul>
              <li>Yoga with Adriene (YouTube Channel)</li>
              <li>Daily Burn (Exercise Videos for Stress and Anxiety)</li>
              <li>Headspace for Sleep (Includes physical relaxation techniques)</li>
              <li>Walk in Nature (Nature walks as a stress-relief activity)</li>
            </ul>
          </li>
          <li><strong>Breathing Exercises:</strong>
            <ul>
              <li>Pranayama Breathing (Yoga Breathing Exercises)</li>
              <li>Box Breathing</li>
              <li>4-7-8 Breathing Technique</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Holistic & Alternative Therapies */}
      <section>
        <h2>6. Holistic & Alternative Therapies</h2>
        <ul>
          <li><strong>Mindfulness and Meditation:</strong>
            <ul>
              <li>Mindful (Website and resources) - <a href="https://www.meditation.org" target="_blank" rel="noopener noreferrer">https://www.meditation.org</a></li>
              <li>Insight Timer (Meditation App with free guided meditations)</li>
            </ul>
          </li>
          <li><strong>Aromatherapy:</strong>
            <ul>
              <li>Essential Oils (Lavender, Chamomile for stress relief)</li>
              <li>Aromatherapy (Various resources available online)</li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ResourceList;
