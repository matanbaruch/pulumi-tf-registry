// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface ClusterPeersResourceRemote {
    /**
     * list of the remote ip addresses
     */
    ipAddresses: pulumi.Input<pulumi.Input<string>[]>;
}

export interface ClusterPeersResourceSourceDetails {
    /**
     * list of the source ip addresses
     */
    ipAddresses: pulumi.Input<pulumi.Input<string>[]>;
}

export interface ClusterResourceCertificate {
    id?: pulumi.Input<string>;
}

export interface ClusterResourceLicense {
    /**
     * list of license keys
     */
    keys?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface ClusterResourceManagementInterface {
    /**
     * The UUID that uniquely identifies the interface.
     */
    id?: pulumi.Input<string>;
    /**
     * IP formation
     */
    ip?: pulumi.Input<inputs.ClusterResourceManagementInterfaceIp>;
    /**
     * The name of the interface. If only the name is provided, the SVM scope must be provided by the object this object is embedded in.
     */
    name?: pulumi.Input<string>;
}

export interface ClusterResourceManagementInterfaceIp {
    /**
     * IP address
     */
    address?: pulumi.Input<string>;
}

export interface ClusterResourceTimezone {
    /**
     * Name of the time zone
     */
    name?: pulumi.Input<string>;
}

export interface ClusterResourceVersion {
    /**
     * ONTAP software version
     */
    full?: pulumi.Input<string>;
}

export interface ClusterScheduleResourceCron {
    /**
     * List of cluster schedule days
     */
    days?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * List of cluster schedule hours
     */
    hours?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * List of cluster schedule minutes
     */
    minutes?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * List of cluster schedule months
     */
    months?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * List of cluster schedule weekdays
     */
    weekdays?: pulumi.Input<pulumi.Input<number>[]>;
}

export interface GetClusterLicensingLicensesDataSourceFilter {
    /**
     * ClusterLicensingLicense name
     */
    name?: string;
}

export interface GetClusterLicensingLicensesDataSourceFilterArgs {
    /**
     * ClusterLicensingLicense name
     */
    name?: pulumi.Input<string>;
}

export interface GetClusterPeersDataSourceFilter {
    /**
     * ClusterPeer name
     */
    name?: string;
}

export interface GetClusterPeersDataSourceFilterArgs {
    /**
     * ClusterPeer name
     */
    name?: pulumi.Input<string>;
}

export interface GetClusterSchedulesDataSourceFilter {
    /**
     * Cluster schdeule type
     */
    type?: string;
}

export interface GetClusterSchedulesDataSourceFilterArgs {
    /**
     * Cluster schdeule type
     */
    type?: pulumi.Input<string>;
}

export interface GetNameServicesDnssDataSourceFilter {
    /**
     * DNS domain such as 'sales.bar.com'. The first domain is the one that the svm belongs to.
     */
    dnsDomains?: string;
    /**
     * IPv4 address of name servers such as '123.123.123.123'.
     */
    nameServers?: string;
    /**
     * IPInterface svm name.
     */
    svmName?: string;
}

export interface GetNameServicesDnssDataSourceFilterArgs {
    /**
     * DNS domain such as 'sales.bar.com'. The first domain is the one that the svm belongs to.
     */
    dnsDomains?: pulumi.Input<string>;
    /**
     * IPv4 address of name servers such as '123.123.123.123'.
     */
    nameServers?: pulumi.Input<string>;
    /**
     * IPInterface svm name.
     */
    svmName?: pulumi.Input<string>;
}

export interface GetNameServicesLdapsDataSourceFilter {
    /**
     * Specifies the default search scope for LDAP queries
     */
    baseScope?: string;
    /**
     * The minimum bind authentication level
     */
    minBindLevel?: string;
    /**
     * NameServicesLDAP svm name
     */
    svmName?: string;
}

export interface GetNameServicesLdapsDataSourceFilterArgs {
    /**
     * Specifies the default search scope for LDAP queries
     */
    baseScope?: pulumi.Input<string>;
    /**
     * The minimum bind authentication level
     */
    minBindLevel?: pulumi.Input<string>;
    /**
     * NameServicesLDAP svm name
     */
    svmName?: pulumi.Input<string>;
}

export interface GetNetworkingIpInterfacesDataSourceFilter {
    /**
     * IPInterface name
     */
    name?: string;
    /**
     * IPInterface scope
     */
    scope?: string;
    /**
     * IPInterface svm name
     */
    svmName?: string;
}

export interface GetNetworkingIpInterfacesDataSourceFilterArgs {
    /**
     * IPInterface name
     */
    name?: pulumi.Input<string>;
    /**
     * IPInterface scope
     */
    scope?: pulumi.Input<string>;
    /**
     * IPInterface svm name
     */
    svmName?: pulumi.Input<string>;
}

export interface GetNetworkingIpRouteDataSourceDestination {
    /**
     * IPv4 or IPv6 address
     */
    address: string;
    /**
     * netmask length (16) or IPv4 mask (255.255.0.0). For IPv6, valid range is 1 to 127.
     */
    netmask?: string;
}

export interface GetNetworkingIpRouteDataSourceDestinationArgs {
    /**
     * IPv4 or IPv6 address
     */
    address: pulumi.Input<string>;
    /**
     * netmask length (16) or IPv4 mask (255.255.0.0). For IPv6, valid range is 1 to 127.
     */
    netmask?: pulumi.Input<string>;
}

export interface GetNetworkingIpRoutesDataSourceFilter {
    /**
     * destination IP address information
     */
    destination?: inputs.GetNetworkingIpRoutesDataSourceFilterDestination;
    /**
     * The IP address of the gateway router leading to the destination.
     */
    gateway?: string;
    /**
     * IP Route svm name
     */
    svmName?: string;
}

export interface GetNetworkingIpRoutesDataSourceFilterArgs {
    /**
     * destination IP address information
     */
    destination?: pulumi.Input<inputs.GetNetworkingIpRoutesDataSourceFilterDestinationArgs>;
    /**
     * The IP address of the gateway router leading to the destination.
     */
    gateway?: pulumi.Input<string>;
    /**
     * IP Route svm name
     */
    svmName?: pulumi.Input<string>;
}

export interface GetNetworkingIpRoutesDataSourceFilterDestination {
    /**
     * IPv4 or IPv6 address
     */
    address?: string;
    /**
     * netmask length (16) or IPv4 mask (255.255.0.0). For IPv6, valid range is 1 to 127.
     */
    netmask?: string;
}

export interface GetNetworkingIpRoutesDataSourceFilterDestinationArgs {
    /**
     * IPv4 or IPv6 address
     */
    address?: pulumi.Input<string>;
    /**
     * netmask length (16) or IPv4 mask (255.255.0.0). For IPv6, valid range is 1 to 127.
     */
    netmask?: pulumi.Input<string>;
}

export interface GetProtocolsCifsLocalGroupsDataSourceFilter {
    /**
     * Cifs Local Group name
     */
    name?: string;
    /**
     * Cifs Local Group svm name
     */
    svmName?: string;
}

export interface GetProtocolsCifsLocalGroupsDataSourceFilterArgs {
    /**
     * Cifs Local Group name
     */
    name?: pulumi.Input<string>;
    /**
     * Cifs Local Group svm name
     */
    svmName?: pulumi.Input<string>;
}

export interface GetProtocolsCifsLocalUsersDataSourceFilter {
    /**
     * CifsLocalUser name
     */
    name?: string;
    /**
     * CifsLocalUser svm name
     */
    svmName?: string;
}

export interface GetProtocolsCifsLocalUsersDataSourceFilterArgs {
    /**
     * CifsLocalUser name
     */
    name?: pulumi.Input<string>;
    /**
     * CifsLocalUser svm name
     */
    svmName?: pulumi.Input<string>;
}

export interface GetProtocolsCifsServicesDataSourceFilter {
    /**
     * CifsService name
     */
    name?: string;
    /**
     * CifsService svm name
     */
    svmName?: string;
}

export interface GetProtocolsCifsServicesDataSourceFilterArgs {
    /**
     * CifsService name
     */
    name?: pulumi.Input<string>;
    /**
     * CifsService svm name
     */
    svmName?: pulumi.Input<string>;
}

export interface GetProtocolsCifsSharesDataSourceFilter {
    /**
     * ProtocolsCIFSShare name
     */
    name?: string;
    /**
     * ProtocolsCIFSShare svm name
     */
    svmName?: string;
}

export interface GetProtocolsCifsSharesDataSourceFilterArgs {
    /**
     * ProtocolsCIFSShare name
     */
    name?: pulumi.Input<string>;
    /**
     * ProtocolsCIFSShare svm name
     */
    svmName?: pulumi.Input<string>;
}

export interface GetProtocolsCifsUserGroupPrivilegesDataSourceFilter {
    /**
     * CifsUserGroupPrivilege name
     */
    name?: string;
    /**
     * CifsUserGroupPrivilege privileges
     */
    privileges?: string;
    /**
     * CifsUserGroupPrivilege svm name
     */
    svmName?: string;
}

export interface GetProtocolsCifsUserGroupPrivilegesDataSourceFilterArgs {
    /**
     * CifsUserGroupPrivilege name
     */
    name?: pulumi.Input<string>;
    /**
     * CifsUserGroupPrivilege privileges
     */
    privileges?: pulumi.Input<string>;
    /**
     * CifsUserGroupPrivilege svm name
     */
    svmName?: pulumi.Input<string>;
}

export interface GetProtocolsNfsExportPoliciesDataSourceFilter {
    /**
     * ExportPolicy name
     */
    name?: string;
    /**
     * ExportPolicy svm name name
     */
    svmName?: string;
}

export interface GetProtocolsNfsExportPoliciesDataSourceFilterArgs {
    /**
     * ExportPolicy name
     */
    name?: pulumi.Input<string>;
    /**
     * ExportPolicy svm name name
     */
    svmName?: pulumi.Input<string>;
}

export interface GetProtocolsNfsExportPolicyRulesDataSourceFilter {
    /**
     * ProtocolsNFSExportPolicyRule svm name
     */
    svmName?: string;
}

export interface GetProtocolsNfsExportPolicyRulesDataSourceFilterArgs {
    /**
     * ProtocolsNFSExportPolicyRule svm name
     */
    svmName?: pulumi.Input<string>;
}

export interface GetProtocolsNfsServicesDataSourceFilter {
    /**
     * ProtocolsNfsService svm name
     */
    svmName?: string;
}

export interface GetProtocolsNfsServicesDataSourceFilterArgs {
    /**
     * ProtocolsNfsService svm name
     */
    svmName?: pulumi.Input<string>;
}

export interface GetProtocolsSanIgroupsDataSourceFilter {
    /**
     * ProtocolsSanIgroup name
     */
    name?: string;
    /**
     * ProtocolsSanIgroup svm name
     */
    svmName?: string;
}

export interface GetProtocolsSanIgroupsDataSourceFilterArgs {
    /**
     * ProtocolsSanIgroup name
     */
    name?: pulumi.Input<string>;
    /**
     * ProtocolsSanIgroup svm name
     */
    svmName?: pulumi.Input<string>;
}

export interface GetProtocolsSanLunMapDataSourceIgroup {
    /**
     * name of the igroup
     */
    name: string;
}

export interface GetProtocolsSanLunMapDataSourceIgroupArgs {
    /**
     * name of the igroup
     */
    name: pulumi.Input<string>;
}

export interface GetProtocolsSanLunMapDataSourceLun {
    /**
     * name of the lun
     */
    name: string;
}

export interface GetProtocolsSanLunMapDataSourceLunArgs {
    /**
     * name of the lun
     */
    name: pulumi.Input<string>;
}

export interface GetProtocolsSanLunMapDataSourceSvm {
    /**
     * name of the SVM
     */
    name: string;
}

export interface GetProtocolsSanLunMapDataSourceSvmArgs {
    /**
     * name of the SVM
     */
    name: pulumi.Input<string>;
}

export interface GetProtocolsSanLunMapsDataSourceFilter {
    /**
     * SVM details for ProtocolsSanLunMaps
     */
    igroup?: inputs.GetProtocolsSanLunMapsDataSourceFilterIgroup;
    /**
     * SVM details for ProtocolsSanLunMaps
     */
    lun?: inputs.GetProtocolsSanLunMapsDataSourceFilterLun;
    /**
     * SVM details for ProtocolsSanLunMaps
     */
    svm?: inputs.GetProtocolsSanLunMapsDataSourceFilterSvm;
}

export interface GetProtocolsSanLunMapsDataSourceFilterArgs {
    /**
     * SVM details for ProtocolsSanLunMaps
     */
    igroup?: pulumi.Input<inputs.GetProtocolsSanLunMapsDataSourceFilterIgroupArgs>;
    /**
     * SVM details for ProtocolsSanLunMaps
     */
    lun?: pulumi.Input<inputs.GetProtocolsSanLunMapsDataSourceFilterLunArgs>;
    /**
     * SVM details for ProtocolsSanLunMaps
     */
    svm?: pulumi.Input<inputs.GetProtocolsSanLunMapsDataSourceFilterSvmArgs>;
}

export interface GetProtocolsSanLunMapsDataSourceFilterIgroup {
    /**
     * name of the igroup
     */
    name?: string;
}

export interface GetProtocolsSanLunMapsDataSourceFilterIgroupArgs {
    /**
     * name of the igroup
     */
    name?: pulumi.Input<string>;
}

export interface GetProtocolsSanLunMapsDataSourceFilterLun {
    /**
     * name of the lun
     */
    name?: string;
}

export interface GetProtocolsSanLunMapsDataSourceFilterLunArgs {
    /**
     * name of the lun
     */
    name?: pulumi.Input<string>;
}

export interface GetProtocolsSanLunMapsDataSourceFilterSvm {
    /**
     * name of the SVM
     */
    name?: string;
}

export interface GetProtocolsSanLunMapsDataSourceFilterSvmArgs {
    /**
     * name of the SVM
     */
    name?: pulumi.Input<string>;
}

export interface GetSecurityAccountDataSourceOwner {
    /**
     * SecurityAccount owner name
     */
    name: string;
    /**
     * SecurityAccount owner uuid
     */
    uuid?: string;
}

export interface GetSecurityAccountDataSourceOwnerArgs {
    /**
     * SecurityAccount owner name
     */
    name: pulumi.Input<string>;
    /**
     * SecurityAccount owner uuid
     */
    uuid?: pulumi.Input<string>;
}

export interface GetSecurityAccountsDataSourceFilter {
    /**
     * SecurityAccount name
     */
    name?: string;
    /**
     * SecurityAccount svm name (Owner name)
     */
    svmName?: string;
}

export interface GetSecurityAccountsDataSourceFilterArgs {
    /**
     * SecurityAccount name
     */
    name?: pulumi.Input<string>;
    /**
     * SecurityAccount svm name (Owner name)
     */
    svmName?: pulumi.Input<string>;
}

export interface GetSnapmirrorDataSourceDestination {
    /**
     * Path to the destination endpoint of the SnapMirror relationship
     */
    path: string;
    /**
     * Cluster details
     */
    svm?: inputs.GetSnapmirrorDataSourceDestinationSvm;
}

export interface GetSnapmirrorDataSourceDestinationArgs {
    /**
     * Path to the destination endpoint of the SnapMirror relationship
     */
    path: pulumi.Input<string>;
    /**
     * Cluster details
     */
    svm?: pulumi.Input<inputs.GetSnapmirrorDataSourceDestinationSvmArgs>;
}

export interface GetSnapmirrorDataSourceDestinationSvm {
    /**
     * cluster name
     */
    name?: string;
    /**
     * cluster UUID
     */
    uuid?: string;
}

export interface GetSnapmirrorDataSourceDestinationSvmArgs {
    /**
     * cluster name
     */
    name?: pulumi.Input<string>;
    /**
     * cluster UUID
     */
    uuid?: pulumi.Input<string>;
}

export interface GetSnapmirrorPoliciesDataSourceFilter {
    /**
     * SnapmirrorPolicy name
     */
    name?: string;
}

export interface GetSnapmirrorPoliciesDataSourceFilterArgs {
    /**
     * SnapmirrorPolicy name
     */
    name?: pulumi.Input<string>;
}

export interface GetSnapmirrorsDataSourceFilter {
    /**
     * Destination path
     */
    destinationPath?: string;
}

export interface GetSnapmirrorsDataSourceFilterArgs {
    /**
     * Destination path
     */
    destinationPath?: pulumi.Input<string>;
}

export interface GetStorageAggregatesDataSourceFilter {
    /**
     * StorageAggregate name
     */
    name?: string;
    /**
     * StorageAggregate svm name
     */
    svmName?: string;
}

export interface GetStorageAggregatesDataSourceFilterArgs {
    /**
     * StorageAggregate name
     */
    name?: pulumi.Input<string>;
    /**
     * StorageAggregate svm name
     */
    svmName?: pulumi.Input<string>;
}

export interface GetStorageFlexcachesDataSourceFilter {
    /**
     * StorageFlexcache name
     */
    name?: string;
    /**
     * StorageFlexcache svm name
     */
    svmName?: string;
}

export interface GetStorageFlexcachesDataSourceFilterArgs {
    /**
     * StorageFlexcache name
     */
    name?: pulumi.Input<string>;
    /**
     * StorageFlexcache svm name
     */
    svmName?: pulumi.Input<string>;
}

export interface GetStorageLunDataSourceLocation {
    /**
     * Logical unit name
     */
    logicalUnit?: string;
    volume?: inputs.GetStorageLunDataSourceLocationVolume;
}

export interface GetStorageLunDataSourceLocationArgs {
    /**
     * Logical unit name
     */
    logicalUnit?: pulumi.Input<string>;
    volume?: pulumi.Input<inputs.GetStorageLunDataSourceLocationVolumeArgs>;
}

export interface GetStorageLunDataSourceLocationVolume {
    /**
     * Volume name
     */
    name: string;
    /**
     * Volume uuid
     */
    uuid?: string;
}

export interface GetStorageLunDataSourceLocationVolumeArgs {
    /**
     * Volume name
     */
    name: pulumi.Input<string>;
    /**
     * Volume uuid
     */
    uuid?: pulumi.Input<string>;
}

export interface GetStorageLunsDataSourceFilter {
    /**
     * StorageLun name
     */
    name?: string;
    /**
     * StorageLun svm name
     */
    svmName?: string;
    /**
     * StorageLun volume name
     */
    volumeName?: string;
}

export interface GetStorageLunsDataSourceFilterArgs {
    /**
     * StorageLun name
     */
    name?: pulumi.Input<string>;
    /**
     * StorageLun svm name
     */
    svmName?: pulumi.Input<string>;
    /**
     * StorageLun volume name
     */
    volumeName?: pulumi.Input<string>;
}

export interface GetStorageSnapshotPoliciesDataSourceFilter {
    /**
     * SnapshotPolicy name
     */
    name?: string;
    /**
     * SnapshotPolicy svm name
     */
    svmName?: string;
}

export interface GetStorageSnapshotPoliciesDataSourceFilterArgs {
    /**
     * SnapshotPolicy name
     */
    name?: pulumi.Input<string>;
    /**
     * SnapshotPolicy svm name
     */
    svmName?: pulumi.Input<string>;
}

export interface GetStorageVolumeSnapshotsDataSourceFilter {
    /**
     * StorageVolumeSnapshot name
     */
    name: string;
    /**
     * StorageVolumeSnapshot svm name
     */
    svmName: string;
    /**
     * StorageVolumeSnapshot volume name
     */
    volumeName: string;
}

export interface GetStorageVolumeSnapshotsDataSourceFilterArgs {
    /**
     * StorageVolumeSnapshot name
     */
    name: pulumi.Input<string>;
    /**
     * StorageVolumeSnapshot svm name
     */
    svmName: pulumi.Input<string>;
    /**
     * StorageVolumeSnapshot volume name
     */
    volumeName: pulumi.Input<string>;
}

export interface GetStorageVolumesDataSourceFilter {
    /**
     * StorageVolume name
     */
    name?: string;
    /**
     * StorageVolume svm name
     */
    svmName?: string;
}

export interface GetStorageVolumesDataSourceFilterArgs {
    /**
     * StorageVolume name
     */
    name?: pulumi.Input<string>;
    /**
     * StorageVolume svm name
     */
    svmName?: pulumi.Input<string>;
}

export interface GetSvmPeerDataSourcePeer {
    /**
     * peer Cluster details for SVMPeer
     */
    cluster?: inputs.GetSvmPeerDataSourcePeerCluster;
    /**
     * peer SVM details for SVMPeer
     */
    svm: inputs.GetSvmPeerDataSourcePeerSvm;
}

export interface GetSvmPeerDataSourcePeerArgs {
    /**
     * peer Cluster details for SVMPeer
     */
    cluster?: pulumi.Input<inputs.GetSvmPeerDataSourcePeerClusterArgs>;
    /**
     * peer SVM details for SVMPeer
     */
    svm: pulumi.Input<inputs.GetSvmPeerDataSourcePeerSvmArgs>;
}

export interface GetSvmPeerDataSourcePeerCluster {
    /**
     * name of the peer Cluster
     */
    name?: string;
}

export interface GetSvmPeerDataSourcePeerClusterArgs {
    /**
     * name of the peer Cluster
     */
    name?: pulumi.Input<string>;
}

export interface GetSvmPeerDataSourcePeerSvm {
    /**
     * name of the peer SVM
     */
    name: string;
}

export interface GetSvmPeerDataSourcePeerSvmArgs {
    /**
     * name of the peer SVM
     */
    name: pulumi.Input<string>;
}

export interface GetSvmPeerDataSourceSvm {
    /**
     * name of the SVM
     */
    name: string;
}

export interface GetSvmPeerDataSourceSvmArgs {
    /**
     * name of the SVM
     */
    name: pulumi.Input<string>;
}

export interface GetSvmPeersDataSourceFilter {
    /**
     * Peer details for SVMPeer
     */
    peer?: inputs.GetSvmPeersDataSourceFilterPeer;
    /**
     * SVM details for SVMPeer
     */
    svm?: inputs.GetSvmPeersDataSourceFilterSvm;
}

export interface GetSvmPeersDataSourceFilterArgs {
    /**
     * Peer details for SVMPeer
     */
    peer?: pulumi.Input<inputs.GetSvmPeersDataSourceFilterPeerArgs>;
    /**
     * SVM details for SVMPeer
     */
    svm?: pulumi.Input<inputs.GetSvmPeersDataSourceFilterSvmArgs>;
}

export interface GetSvmPeersDataSourceFilterPeer {
    /**
     * peer Cluster details for SVMPeer
     */
    cluster?: inputs.GetSvmPeersDataSourceFilterPeerCluster;
    /**
     * peer SVM details for SVMPeer
     */
    svm?: inputs.GetSvmPeersDataSourceFilterPeerSvm;
}

export interface GetSvmPeersDataSourceFilterPeerArgs {
    /**
     * peer Cluster details for SVMPeer
     */
    cluster?: pulumi.Input<inputs.GetSvmPeersDataSourceFilterPeerClusterArgs>;
    /**
     * peer SVM details for SVMPeer
     */
    svm?: pulumi.Input<inputs.GetSvmPeersDataSourceFilterPeerSvmArgs>;
}

export interface GetSvmPeersDataSourceFilterPeerCluster {
    /**
     * name of the peer Cluster
     */
    name?: string;
}

export interface GetSvmPeersDataSourceFilterPeerClusterArgs {
    /**
     * name of the peer Cluster
     */
    name?: pulumi.Input<string>;
}

export interface GetSvmPeersDataSourceFilterPeerSvm {
    /**
     * name of the peer SVM
     */
    name?: string;
}

export interface GetSvmPeersDataSourceFilterPeerSvmArgs {
    /**
     * name of the peer SVM
     */
    name?: pulumi.Input<string>;
}

export interface GetSvmPeersDataSourceFilterSvm {
    /**
     * name of the SVM
     */
    name?: string;
}

export interface GetSvmPeersDataSourceFilterSvmArgs {
    /**
     * name of the SVM
     */
    name?: pulumi.Input<string>;
}

export interface GetSvmsDataSourceFilter {
    /**
     * Svm name
     */
    name?: string;
}

export interface GetSvmsDataSourceFilterArgs {
    /**
     * Svm name
     */
    name?: pulumi.Input<string>;
}

export interface NetworkingIpInterfaceResourceIp {
    /**
     * IPInterface IP address
     */
    address: pulumi.Input<string>;
    /**
     * IPInterface IP netmask
     */
    netmask: pulumi.Input<number>;
}

export interface NetworkingIpInterfaceResourceLocation {
    /**
     * IPInterface home node
     */
    homeNode: pulumi.Input<string>;
    /**
     * IPInterface home port
     */
    homePort: pulumi.Input<string>;
}

export interface NetworkingIpRouteResourceDestination {
    /**
     * IPv4 or IPv6 address
     */
    address?: pulumi.Input<string>;
    /**
     * netmask length (16) or IPv4 mask (255.255.0.0). For IPv6, valid range is 1 to 127.
     */
    netmask?: pulumi.Input<string>;
}

export interface ProtocolsCifsLocalGroupResourceMember {
    /**
     * Cifs Local Group member
     */
    name?: pulumi.Input<string>;
}

export interface ProtocolsCifsLocalUserResourceMembership {
    /**
     * CifsLocalUser membership name
     */
    name?: pulumi.Input<string>;
}

export interface ProtocolsCifsServiceResourceAdDomain {
    /**
     * Fully qualified domain name of the Windows Active Directory to which this CIFS server belongs
     */
    fqdn: pulumi.Input<string>;
    /**
     * Organizational unit
     */
    organizationalUnit?: pulumi.Input<string>;
    /**
     * Account password used to add this CIFS server to the Active Directory
     */
    password: pulumi.Input<string>;
    /**
     * User account with the access to add the CIFS server to the Active Directory
     */
    user: pulumi.Input<string>;
}

export interface ProtocolsCifsServiceResourceNetbios {
    /**
     * list of one or more NetBIOS aliases for the CIFS server
     */
    aliases?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * NetBios name service (NBNS) is enabled for the CIFS
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * list of Windows Internet Name Server (WINS) addresses that manage and map the NetBIOS name of the CIFS server to their network IP addresses. The IP addresses must be IPv4 addresses.
     */
    winsServers?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface ProtocolsCifsServiceResourceSecurity {
    /**
     * List of advertised KDC encryptions (9.12)
     */
    advertisedKdcEncryptions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An AES session key is enabled for the Netlogon channel (9.10)
     */
    aesNetlogonEnabled?: pulumi.Input<boolean>;
    /**
     * Encryption is required for domain controller connections (9.8)
     */
    encryptDcConnection?: pulumi.Input<boolean>;
    /**
     * Specifies whether AES-128 and AES-256 encryption is enabled for all Kerberos-based communication with the Active Directory KDC. Deprecated in 9.12. Use 'advertised_kdc_encryptions' instead.
     */
    kdcEncryption?: pulumi.Input<boolean>;
    /**
     * Specifies if LDAP referral chasing is enabled for AD LDAP connections (9.10)
     */
    ldapReferralEnabled?: pulumi.Input<boolean>;
    /**
     * CIFS server minimum security level
     */
    lmCompatibilityLevel?: pulumi.Input<string>;
    /**
     * Specifies what level of access an anonymous user is granted
     */
    restrictAnonymous?: pulumi.Input<string>;
    /**
     * Client session security for AD LDAP connections (9.10)
     */
    sessionSecurity?: pulumi.Input<string>;
    /**
     * Specifies if encryption is required for incoming CIFS traffic
     */
    smbEncryption?: pulumi.Input<boolean>;
    /**
     * Specifies if signing is required for incoming CIFS traffic
     */
    smbSigning?: pulumi.Input<boolean>;
    /**
     * Specifies whether or not channel binding is attempted in the case of TLS/LDAPS (9.10)
     */
    tryLdapChannelBinding?: pulumi.Input<boolean>;
    /**
     * Specifies whether or not to use use LDAPS for secure Active Directory LDAP connections by using the TLS/SSL protocols (9.10)
     */
    useLdaps?: pulumi.Input<boolean>;
    /**
     * Specifies whether or not to use SSL/TLS for allowing secure LDAP communication with Active Directory LDAP servers (9.10)
     */
    useStartTls?: pulumi.Input<boolean>;
}

export interface ProtocolsCifsShareResourceAcl {
    /**
     * Specifies the access rights that a user or group has on the defined CIFS Share.
     */
    permission?: pulumi.Input<string>;
    /**
     * string Specifies the type of the user or group to add to the access control list of a CIFS share.
     */
    type?: pulumi.Input<string>;
    /**
     * Specifies the user or group name to add to the access control list of a CIFS share.
     */
    userOrGroup?: pulumi.Input<string>;
}

export interface ProtocolsNfsServiceResourceProtocol {
    /**
     * NFSv3 enabled
     */
    v3Enabled?: pulumi.Input<boolean>;
    /**
     * NFSv4.0 enabled
     */
    v40Enabled?: pulumi.Input<boolean>;
    /**
     * NFSv4.0 features
     */
    v40Features?: pulumi.Input<inputs.ProtocolsNfsServiceResourceProtocolV40Features>;
    /**
     * NFSv4.1 enabled
     */
    v41Enabled?: pulumi.Input<boolean>;
    /**
     * NFSv4.1 features
     */
    v41Features?: pulumi.Input<inputs.ProtocolsNfsServiceResourceProtocolV41Features>;
    /**
     * User ID domain for NFSv4
     */
    v4IdDomain?: pulumi.Input<string>;
}

export interface ProtocolsNfsServiceResourceProtocolV40Features {
    /**
     * Enable ACL for NFSv4.0
     */
    aclEnabled?: pulumi.Input<boolean>;
    /**
     * Enable Read File Delegation for NFSv4.0
     */
    readDelegationEnabled?: pulumi.Input<boolean>;
    /**
     * Enable Write File Delegation for NFSv4.0
     */
    writeDelegationEnabled?: pulumi.Input<boolean>;
}

export interface ProtocolsNfsServiceResourceProtocolV41Features {
    /**
     * Enable ACL for NFSv4.1
     */
    aclEnabled?: pulumi.Input<boolean>;
    /**
     * Enabled pNFS (parallel NFS) for NFSv4.1
     */
    pnfsEnabled?: pulumi.Input<boolean>;
    /**
     * Enable Read File Delegation for NFSv4.1
     */
    readDelegationEnabled?: pulumi.Input<boolean>;
    /**
     * Enable Write File Delegation for NFSv4.1
     */
    writeDelegationEnabled?: pulumi.Input<boolean>;
}

export interface ProtocolsNfsServiceResourceRoot {
    /**
     * Ignore NTFS ACL for root user
     */
    ignoreNtAcl?: pulumi.Input<boolean>;
    /**
     * Skip write permissions check for root user
     */
    skipWritePermissionCheck?: pulumi.Input<boolean>;
}

export interface ProtocolsNfsServiceResourceSecurity {
    /**
     * Specifies whether file ownership can be changed only by the superuser, or if a non-root user can also change file ownership
     */
    chownMode?: pulumi.Input<string>;
    /**
     * Controls the permissions that are displayed to NFSv3 and NFSv4 clients on a file or directory that has an NT ACL set
     */
    ntAclDisplayPermission?: pulumi.Input<boolean>;
    /**
     * Specifies how NFSv3 security changes affect NTFS volumes
     */
    ntfsUnixSecurity?: pulumi.Input<string>;
    /**
     * Specifies, in seconds, the amount of time a RPCSEC_GSS context is permitted to remain unused before it is deleted
     */
    rpcsecContextIdle?: pulumi.Input<number>;
}

export interface ProtocolsNfsServiceResourceTransport {
    /**
     * tcp enabled
     */
    tcpEnabled?: pulumi.Input<boolean>;
    /**
     * Max tcp transfer size
     */
    tcpMaxTransferSize?: pulumi.Input<number>;
    /**
     * udp enabled
     */
    udpEnabled?: pulumi.Input<boolean>;
}

export interface ProtocolsNfsServiceResourceWindows {
    /**
     * default Windows user for the NFS server
     */
    defaultUser?: pulumi.Input<string>;
    /**
     * whether or not the mapping of an unknown UID to the default Windows user is enabled
     */
    mapUnknownUidToDefaultUser?: pulumi.Input<boolean>;
    /**
     * if permission checks are to be skipped for NFS WRITE calls from root/owner.
     */
    v3MsDosClientEnabled?: pulumi.Input<boolean>;
}

export interface ProtocolsSanIgroupResourceIgroup {
    /**
     * Initiator group name
     */
    name: pulumi.Input<string>;
}

export interface ProtocolsSanIgroupResourceInitiator {
    /**
     * Initiator name
     */
    name: pulumi.Input<string>;
}

export interface ProtocolsSanIgroupResourcePortset {
    /**
     * Portset name
     */
    name: pulumi.Input<string>;
}

export interface ProtocolsSanIgroupResourceSvm {
    /**
     * name of the SVM
     */
    name: pulumi.Input<string>;
}

export interface ProtocolsSanLunMapsResourceIgroup {
    /**
     * name of the igroup
     */
    name: pulumi.Input<string>;
}

export interface ProtocolsSanLunMapsResourceLun {
    /**
     * name of the lun
     */
    name: pulumi.Input<string>;
}

export interface ProtocolsSanLunMapsResourceSvm {
    /**
     * name of the SVM
     */
    name: pulumi.Input<string>;
}

export interface ProviderConnectionProfile {
    /**
     * ONTAP management interface IP address or name
     */
    hostname: pulumi.Input<string>;
    /**
     * Profile name
     */
    name: pulumi.Input<string>;
    /**
     * ONTAP management password for username
     */
    password: pulumi.Input<string>;
    /**
     * ONTAP management user name (cluster or svm)
     */
    username: pulumi.Input<string>;
    /**
     * Whether to enforce SSL certificate validation, defaults to true
     */
    validateCerts?: pulumi.Input<boolean>;
}

export interface SecurityAccountResourceApplication {
    /**
     * Application name
     */
    application: pulumi.Input<string>;
    /**
     * List of authentication methods
     */
    authenticationMethods?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Second authentication method
     */
    secondAuthenticationMethod?: pulumi.Input<string>;
}

export interface SecurityAccountResourceOwner {
    /**
     * Account owner name
     */
    name?: pulumi.Input<string>;
}

export interface SecurityAccountResourceRole {
    /**
     * Account role name
     */
    name?: pulumi.Input<string>;
}

export interface SnapmirrorPolicyResourceRetention {
    /**
     * Number of Snapshot copies to be kept for retention.
     */
    count?: pulumi.Input<number>;
    /**
     * Schedule used to create Snapshot copies on the destination for long term retention.
     */
    creationScheduleName?: pulumi.Input<string>;
    /**
     * Snapshot copy label
     */
    label: pulumi.Input<string>;
    /**
     * Specifies the prefix for the Snapshot copy name to be created as per the schedule
     */
    prefix?: pulumi.Input<string>;
}

export interface SnapmirrorResourceCreateDestination {
    /**
     * Enable this property to provision the destination endpoint
     */
    enabled: pulumi.Input<boolean>;
}

export interface SnapmirrorResourceDestinationEndpoint {
    /**
     * Cluster details
     */
    cluster?: pulumi.Input<inputs.SnapmirrorResourceDestinationEndpointCluster>;
    /**
     * Path to the destination endpoint of the SnapMirror relationship
     */
    path: pulumi.Input<string>;
}

export interface SnapmirrorResourceDestinationEndpointCluster {
    /**
     * cluster name
     */
    name: pulumi.Input<string>;
}

export interface SnapmirrorResourcePolicy {
    /**
     * policy name
     */
    name: pulumi.Input<string>;
}

export interface SnapmirrorResourceSourceEndpoint {
    /**
     * Cluster details
     */
    cluster?: pulumi.Input<inputs.SnapmirrorResourceSourceEndpointCluster>;
    /**
     * Path to the source endpoint of the SnapMirror relationship
     */
    path: pulumi.Input<string>;
}

export interface SnapmirrorResourceSourceEndpointCluster {
    /**
     * cluster name
     */
    name: pulumi.Input<string>;
}

export interface StorageFlexcacheResourceAggregate {
    /**
     * UUID of the aggregate
     */
    id?: pulumi.Input<string>;
    /**
     * Name of the aggregate
     */
    name?: pulumi.Input<string>;
}

export interface StorageFlexcacheResourceGuarantee {
    /**
     * The type of guarantee
     */
    type?: pulumi.Input<string>;
}

export interface StorageFlexcacheResourceOrigin {
    /**
     * origin volume SVM
     */
    svm: pulumi.Input<inputs.StorageFlexcacheResourceOriginSvm>;
    /**
     * origin volume
     */
    volume: pulumi.Input<inputs.StorageFlexcacheResourceOriginVolume>;
}

export interface StorageFlexcacheResourceOriginSvm {
    /**
     * ID of the origin volume SVM
     */
    id?: pulumi.Input<string>;
    /**
     * Name of the origin volume SVM
     */
    name?: pulumi.Input<string>;
}

export interface StorageFlexcacheResourceOriginVolume {
    /**
     * ID of the origin volume
     */
    id?: pulumi.Input<string>;
    /**
     * Name of the origin volume
     */
    name?: pulumi.Input<string>;
}

export interface StorageSnapshotPolicyResourceCopy {
    /**
     * The number of Snapshot copies to maintain for this schedule
     */
    count: pulumi.Input<number>;
    /**
     * The prefix to use while creating Snapshot copies at regular intervals
     */
    prefix?: pulumi.Input<string>;
    /**
     * The retention period of Snapshot copies for this schedule
     */
    retentionPeriod?: pulumi.Input<string>;
    /**
     * Schedule at which Snapshot copies are captured on the volume
     */
    schedule: pulumi.Input<inputs.StorageSnapshotPolicyResourceCopySchedule>;
    /**
     * Label for SnapMirror operations
     */
    snapmirrorLabel?: pulumi.Input<string>;
}

export interface StorageSnapshotPolicyResourceCopySchedule {
    /**
     * Some common schedules already defined in the system are hourly, daily, weekly, at 15 minute intervals, and at 5 minute intervals. Snapshot copy policies with custom schedules can be referenced
     */
    name: pulumi.Input<string>;
}

export interface StorageVolumeResourceAggregate {
    /**
     * Name of the aggregate
     */
    name: pulumi.Input<string>;
}

export interface StorageVolumeResourceAnalytics {
    /**
     * Set file system analytics state of the volume
     */
    state?: pulumi.Input<string>;
}

export interface StorageVolumeResourceEfficiency {
    /**
     * Whether to enable compression for the volume (HDD and Flash Pool aggregates)
     */
    compression?: pulumi.Input<string>;
    /**
     * Allows a storage efficiency policy to be set on volume creation
     */
    policyName?: pulumi.Input<string>;
}

export interface StorageVolumeResourceNas {
    /**
     * The name of the export policy
     */
    exportPolicyName?: pulumi.Input<string>;
    /**
     * The UNIX group ID for the volume
     */
    groupId?: pulumi.Input<number>;
    /**
     * Junction path of the volume
     */
    junctionPath?: pulumi.Input<string>;
    /**
     * The security style associated to the volume
     */
    securityStyle?: pulumi.Input<string>;
    /**
     * Unix permission bits in octal or symbolic format. For example, 0 is equivalent to ------------, 777 is equivalent to ---rwxrwxrwx,both formats are accepted
     */
    unixPermissions?: pulumi.Input<number>;
    /**
     * The UNIX user ID for the volume
     */
    userId?: pulumi.Input<number>;
}

export interface StorageVolumeResourceSnaplock {
    /**
     * The SnapLock type of the volume
     */
    type?: pulumi.Input<string>;
}

export interface StorageVolumeResourceSpace {
    logicalSpace?: pulumi.Input<inputs.StorageVolumeResourceSpaceLogicalSpace>;
    /**
     * Amount of space reserved for snapshot copies of the volume
     */
    percentSnapshotSpace?: pulumi.Input<number>;
    /**
     * The size of the volume
     */
    size: pulumi.Input<number>;
    /**
     * The unit used to interpret the size parameter
     */
    sizeUnit: pulumi.Input<string>;
}

export interface StorageVolumeResourceSpaceLogicalSpace {
    /**
     * Whether to perform logical space accounting on the volume
     */
    enforcement?: pulumi.Input<boolean>;
    /**
     * Whether to report space logically
     */
    reporting?: pulumi.Input<boolean>;
}

export interface StorageVolumeResourceTiering {
    /**
     * Determines how many days must pass before inactive data in a volume using the Auto or Snapshot-Only policy is considered cold and eligible for tiering
     */
    minimumCoolingDays?: pulumi.Input<number>;
    /**
     * The tiering policy that is to be associated with the volume
     */
    policyName?: pulumi.Input<string>;
}

export interface SvmPeersResourcePeer {
    /**
     * peer Cluster details for SVMPeer
     */
    cluster: pulumi.Input<inputs.SvmPeersResourcePeerCluster>;
    /**
     * Peer connection profile name, if not provided, status will be only initiated and need to be accepted from peer side to make the status peered
     */
    peerCxProfileName?: pulumi.Input<string>;
    /**
     * peer SVM details for SVMPeer
     */
    svm: pulumi.Input<inputs.SvmPeersResourcePeerSvm>;
}

export interface SvmPeersResourcePeerCluster {
    /**
     * name of the peer Cluster
     */
    name: pulumi.Input<string>;
}

export interface SvmPeersResourcePeerSvm {
    /**
     * name of the peer SVM
     */
    name: pulumi.Input<string>;
}

export interface SvmPeersResourceSvm {
    /**
     * name of the SVM
     */
    name: pulumi.Input<string>;
}

export interface SvmResourceAggregate {
    /**
     * Name of the aggregate
     */
    name: pulumi.Input<string>;
}
export namespace config {
}
