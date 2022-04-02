package com.app.services;

import java.util.List;

import com.app.pojos.Preference;

public interface IPreferenceService {
	
	List<Preference> addPreference(Preference preference,int studentId);
	
	List<Preference> deletePreference(int studentId, int preferenceId);

}
