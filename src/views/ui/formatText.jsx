import React from 'react';
import { Text, StyleSheet } from 'react-native';
import COLORS from '../../variant/colors';

const FormatString = (input) => {
  const boldRegex = /\*(.*?)\*/g;
  const italicRegex = /-(.*?)-/g;
  const codeRegex = /`(.*?)`/g;
  const underlineRegex = /_(.*?)_/g;

  const parts = input.split(boldRegex);
  const formattedText = [];

  parts.forEach((part, index) => {
    let keyBase = `b-${index}`;

    if (index % 2 === 1) {
      // Split bold parts further for additional formatting
      part = [{style: styles.bold, text: part}];
    } else {
      part = [{style: {}, text: part}];
    }

    // Process each subpart for italic, code, and underline
    part.forEach(sub => {
      sub.text.split(italicRegex).forEach((it, i) => {
        let itKey = `${keyBase}-i-${i}`;
        if (i % 2 === 1) {
          sub.text = [{style: StyleSheet.compose(sub.style, styles.italic), text: it}];
        } else {
          sub.text = [{style: sub.style, text: it}];
        }

        // Further process for code and underline
        sub.text.forEach(st => {
          st.text.split(codeRegex).forEach((co, j) => {
            let coKey = `${itKey}-co-${j}`;
            if (j % 2 === 1) {
              formattedText.push(
                <Text key={coKey} style={StyleSheet.compose(st.style, styles.code)}>
                  {co}
                </Text>
              );
            } else {
              // Further process for underline
              co.split(underlineRegex).forEach((ul, k) => {
                let ulKey = `${coKey}-ul-${k}`;
                if (k % 2 === 1) {
                  formattedText.push(
                    <Text key={ulKey} style={StyleSheet.compose(st.style, styles.underline)}>
                      {ul}
                    </Text>
                  );
                } else {
                  formattedText.push(
                    <Text key={ulKey} style={st.style}>
                      {ul}
                    </Text>
                  );
                }
              });
            }
          });
        });
      });
    });
  });

  return formattedText;
};
const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold'
  },
  italic: {
    fontStyle: 'italic'
  },
  underline: {
    textDecorationColor: '#000',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  code: {
    fontFamily: 'monospace',
    backgroundColor: COLORS.sea_green,
    color: COLORS.white
  }
});

export default FormatString;
