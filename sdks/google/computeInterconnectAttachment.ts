// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ComputeInterconnectAttachment extends pulumi.CustomResource {
    /**
     * Get an existing ComputeInterconnectAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ComputeInterconnectAttachmentState, opts?: pulumi.CustomResourceOptions): ComputeInterconnectAttachment {
        return new ComputeInterconnectAttachment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/computeInterconnectAttachment:ComputeInterconnectAttachment';

    /**
     * Returns true if the given object is an instance of ComputeInterconnectAttachment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComputeInterconnectAttachment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComputeInterconnectAttachment.__pulumiType;
    }

    /**
     * Whether the VLAN attachment is enabled or disabled. When using PARTNER type this will Pre-Activate the interconnect
     * attachment
     */
    public readonly adminEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Provisioned bandwidth capacity for the interconnect attachment. For attachments of type DEDICATED, the user can set the
     * bandwidth. For attachments of type PARTNER, the Google Partner that is operating the interconnect must set the
     * bandwidth. Output only for PARTNER type, mutable for PARTNER_PROVIDER and DEDICATED, Defaults to BPS_10G Possible
     * values: ["BPS_50M", "BPS_100M", "BPS_200M", "BPS_300M", "BPS_400M", "BPS_500M", "BPS_1G", "BPS_2G", "BPS_5G", "BPS_10G",
     * "BPS_20G", "BPS_50G"]
     */
    public readonly bandwidth!: pulumi.Output<string>;
    /**
     * Up to 16 candidate prefixes that can be used to restrict the allocation of cloudRouterIpAddress and
     * customerRouterIpAddress for this attachment. All prefixes must be within link-local address space (169.254.0.0/16) and
     * must be /29 or shorter (/28, /27, etc). Google will attempt to select an unused /29 from the supplied candidate
     * prefix(es). The request will fail if all possible /29s are in use on Google's edge. If not supplied, Google will
     * randomly select an unused /29 from all of link-local space.
     */
    public readonly candidateSubnets!: pulumi.Output<string[] | undefined>;
    /**
     * IPv4 address + prefix length to be configured on Cloud Router Interface for this interconnect attachment.
     */
    public /*out*/ readonly cloudRouterIpAddress!: pulumi.Output<string>;
    /**
     * IPv6 address + prefix length to be configured on Cloud Router Interface for this interconnect attachment.
     */
    public /*out*/ readonly cloudRouterIpv6Address!: pulumi.Output<string>;
    /**
     * Creation timestamp in RFC3339 text format.
     */
    public /*out*/ readonly creationTimestamp!: pulumi.Output<string>;
    /**
     * IPv4 address + prefix length to be configured on the customer router subinterface for this interconnect attachment.
     */
    public /*out*/ readonly customerRouterIpAddress!: pulumi.Output<string>;
    /**
     * IPv6 address + prefix length to be configured on the customer router subinterface for this interconnect attachment.
     */
    public /*out*/ readonly customerRouterIpv6Address!: pulumi.Output<string>;
    /**
     * An optional description of this resource.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Desired availability domain for the attachment. Only available for type PARTNER, at creation time. For improved
     * reliability, customers should configure a pair of attachments with one per availability domain. The selected
     * availability domain will be provided to the Partner via the pairing key so that the provisioned circuit will lie in the
     * specified domain. If not specified, the value will default to AVAILABILITY_DOMAIN_ANY.
     */
    public readonly edgeAvailabilityDomain!: pulumi.Output<string>;
    /**
     * Indicates the user-supplied encryption option of this interconnect attachment. Can only be specified at attachment
     * creation for PARTNER or DEDICATED attachments. * NONE - This is the default value, which means that the VLAN attachment
     * carries unencrypted traffic. VMs are able to send traffic to, or receive traffic from, such a VLAN attachment. * IPSEC -
     * The VLAN attachment carries only encrypted traffic that is encrypted by an IPsec device, such as an HA VPN gateway or
     * third-party IPsec VPN. VMs cannot directly send traffic to, or receive traffic from, such a VLAN attachment. To use HA
     * VPN over Cloud Interconnect, the VLAN attachment must be created with this option. Default value: "NONE" Possible
     * values: ["NONE", "IPSEC"]
     */
    public readonly encryption!: pulumi.Output<string | undefined>;
    /**
     * Google reference ID, to be used when raising support tickets with Google or otherwise to debug backend connectivity
     * issues.
     */
    public /*out*/ readonly googleReferenceId!: pulumi.Output<string>;
    /**
     * URL of the underlying Interconnect object that this attachment's traffic will traverse through. Required if type is
     * DEDICATED, must not be set if type is PARTNER.
     */
    public readonly interconnect!: pulumi.Output<string | undefined>;
    /**
     * URL of addresses that have been reserved for the interconnect attachment, Used only for interconnect attachment that has
     * the encryption option as IPSEC. The addresses must be RFC 1918 IP address ranges. When creating HA VPN gateway over the
     * interconnect attachment, if the attachment is configured to use an RFC 1918 IP address, then the VPN gateway's IP
     * address will be allocated from the IP address range specified here. For example, if the HA VPN gateway's interface 0 is
     * paired to this interconnect attachment, then an RFC 1918 IP address for the VPN gateway interface 0 will be allocated
     * from the IP address specified for this interconnect attachment. If this field is not specified for interconnect
     * attachment that has encryption option as IPSEC, later on when creating HA VPN gateway on this interconnect attachment,
     * the HA VPN gateway's IP address will be allocated from regional external IP address pool.
     */
    public readonly ipsecInternalAddresses!: pulumi.Output<string[] | undefined>;
    /**
     * Maximum Transmission Unit (MTU), in bytes, of packets passing through this interconnect attachment. Currently, only 1440
     * and 1500 are allowed. If not specified, the value will default to 1440.
     */
    public readonly mtu!: pulumi.Output<string>;
    /**
     * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and
     * comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression 'a-z?' which
     * means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or
     * digit, except the last character, which cannot be a dash.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * [Output only for type PARTNER. Not present for DEDICATED]. The opaque identifier of an PARTNER attachment used to
     * initiate provisioning with a selected partner. Of the form "XXXXX/region/domain"
     */
    public /*out*/ readonly pairingKey!: pulumi.Output<string>;
    /**
     * [Output only for type PARTNER. Not present for DEDICATED]. Optional BGP ASN for the router that should be supplied by a
     * layer 3 Partner if they configured BGP on behalf of the customer.
     */
    public /*out*/ readonly partnerAsn!: pulumi.Output<string>;
    /**
     * Information specific to an InterconnectAttachment. This property is populated if the interconnect that this is attached
     * to is of type DEDICATED.
     */
    public /*out*/ readonly privateInterconnectInfos!: pulumi.Output<outputs.ComputeInterconnectAttachmentPrivateInterconnectInfo[]>;
    public readonly project!: pulumi.Output<string>;
    /**
     * Region where the regional interconnect attachment resides.
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * URL of the cloud router to be used for dynamic routing. This router must be in the same region as this
     * InterconnectAttachment. The InterconnectAttachment will automatically connect the Interconnect to the network & region
     * within which the Cloud Router is configured.
     */
    public readonly router!: pulumi.Output<string>;
    public /*out*/ readonly selfLink!: pulumi.Output<string>;
    /**
     * The stack type for this interconnect attachment to identify whether the IPv6 feature is enabled or not. If not
     * specified, IPV4_ONLY will be used. This field can be both set at interconnect attachments creation and update
     * interconnect attachment operations. Possible values: ["IPV4_IPV6", "IPV4_ONLY"]
     */
    public readonly stackType!: pulumi.Output<string>;
    /**
     * [Output Only] The current state of this attachment's functionality.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * Length of the IPv4 subnet mask. Allowed values: 29 (default), 30. The default value is 29, except for Cross-Cloud
     * Interconnect connections that use an InterconnectRemoteLocation with a constraints.subnetLengthRange.min equal to 30.
     * For example, connections that use an Azure remote location fall into this category. In these cases, the default value is
     * 30, and requesting 29 returns an error. Where both 29 and 30 are allowed, 29 is preferred, because it gives Google Cloud
     * Support more debugging visibility.
     */
    public readonly subnetLength!: pulumi.Output<number | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.ComputeInterconnectAttachmentTimeouts | undefined>;
    /**
     * The type of InterconnectAttachment you wish to create. Defaults to DEDICATED. Possible values: ["DEDICATED", "PARTNER",
     * "PARTNER_PROVIDER"]
     */
    public readonly type!: pulumi.Output<string>;
    /**
     * The IEEE 802.1Q VLAN tag for this attachment, in the range 2-4094. When using PARTNER type this will be managed
     * upstream.
     */
    public readonly vlanTag8021q!: pulumi.Output<number>;

    /**
     * Create a ComputeInterconnectAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComputeInterconnectAttachmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ComputeInterconnectAttachmentArgs | ComputeInterconnectAttachmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ComputeInterconnectAttachmentState | undefined;
            resourceInputs["adminEnabled"] = state ? state.adminEnabled : undefined;
            resourceInputs["bandwidth"] = state ? state.bandwidth : undefined;
            resourceInputs["candidateSubnets"] = state ? state.candidateSubnets : undefined;
            resourceInputs["cloudRouterIpAddress"] = state ? state.cloudRouterIpAddress : undefined;
            resourceInputs["cloudRouterIpv6Address"] = state ? state.cloudRouterIpv6Address : undefined;
            resourceInputs["creationTimestamp"] = state ? state.creationTimestamp : undefined;
            resourceInputs["customerRouterIpAddress"] = state ? state.customerRouterIpAddress : undefined;
            resourceInputs["customerRouterIpv6Address"] = state ? state.customerRouterIpv6Address : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["edgeAvailabilityDomain"] = state ? state.edgeAvailabilityDomain : undefined;
            resourceInputs["encryption"] = state ? state.encryption : undefined;
            resourceInputs["googleReferenceId"] = state ? state.googleReferenceId : undefined;
            resourceInputs["interconnect"] = state ? state.interconnect : undefined;
            resourceInputs["ipsecInternalAddresses"] = state ? state.ipsecInternalAddresses : undefined;
            resourceInputs["mtu"] = state ? state.mtu : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["pairingKey"] = state ? state.pairingKey : undefined;
            resourceInputs["partnerAsn"] = state ? state.partnerAsn : undefined;
            resourceInputs["privateInterconnectInfos"] = state ? state.privateInterconnectInfos : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["router"] = state ? state.router : undefined;
            resourceInputs["selfLink"] = state ? state.selfLink : undefined;
            resourceInputs["stackType"] = state ? state.stackType : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["subnetLength"] = state ? state.subnetLength : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["vlanTag8021q"] = state ? state.vlanTag8021q : undefined;
        } else {
            const args = argsOrState as ComputeInterconnectAttachmentArgs | undefined;
            if ((!args || args.router === undefined) && !opts.urn) {
                throw new Error("Missing required property 'router'");
            }
            resourceInputs["adminEnabled"] = args ? args.adminEnabled : undefined;
            resourceInputs["bandwidth"] = args ? args.bandwidth : undefined;
            resourceInputs["candidateSubnets"] = args ? args.candidateSubnets : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["edgeAvailabilityDomain"] = args ? args.edgeAvailabilityDomain : undefined;
            resourceInputs["encryption"] = args ? args.encryption : undefined;
            resourceInputs["interconnect"] = args ? args.interconnect : undefined;
            resourceInputs["ipsecInternalAddresses"] = args ? args.ipsecInternalAddresses : undefined;
            resourceInputs["mtu"] = args ? args.mtu : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["router"] = args ? args.router : undefined;
            resourceInputs["stackType"] = args ? args.stackType : undefined;
            resourceInputs["subnetLength"] = args ? args.subnetLength : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["vlanTag8021q"] = args ? args.vlanTag8021q : undefined;
            resourceInputs["cloudRouterIpAddress"] = undefined /*out*/;
            resourceInputs["cloudRouterIpv6Address"] = undefined /*out*/;
            resourceInputs["creationTimestamp"] = undefined /*out*/;
            resourceInputs["customerRouterIpAddress"] = undefined /*out*/;
            resourceInputs["customerRouterIpv6Address"] = undefined /*out*/;
            resourceInputs["googleReferenceId"] = undefined /*out*/;
            resourceInputs["pairingKey"] = undefined /*out*/;
            resourceInputs["partnerAsn"] = undefined /*out*/;
            resourceInputs["privateInterconnectInfos"] = undefined /*out*/;
            resourceInputs["selfLink"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ComputeInterconnectAttachment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ComputeInterconnectAttachment resources.
 */
export interface ComputeInterconnectAttachmentState {
    /**
     * Whether the VLAN attachment is enabled or disabled. When using PARTNER type this will Pre-Activate the interconnect
     * attachment
     */
    adminEnabled?: pulumi.Input<boolean>;
    /**
     * Provisioned bandwidth capacity for the interconnect attachment. For attachments of type DEDICATED, the user can set the
     * bandwidth. For attachments of type PARTNER, the Google Partner that is operating the interconnect must set the
     * bandwidth. Output only for PARTNER type, mutable for PARTNER_PROVIDER and DEDICATED, Defaults to BPS_10G Possible
     * values: ["BPS_50M", "BPS_100M", "BPS_200M", "BPS_300M", "BPS_400M", "BPS_500M", "BPS_1G", "BPS_2G", "BPS_5G", "BPS_10G",
     * "BPS_20G", "BPS_50G"]
     */
    bandwidth?: pulumi.Input<string>;
    /**
     * Up to 16 candidate prefixes that can be used to restrict the allocation of cloudRouterIpAddress and
     * customerRouterIpAddress for this attachment. All prefixes must be within link-local address space (169.254.0.0/16) and
     * must be /29 or shorter (/28, /27, etc). Google will attempt to select an unused /29 from the supplied candidate
     * prefix(es). The request will fail if all possible /29s are in use on Google's edge. If not supplied, Google will
     * randomly select an unused /29 from all of link-local space.
     */
    candidateSubnets?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * IPv4 address + prefix length to be configured on Cloud Router Interface for this interconnect attachment.
     */
    cloudRouterIpAddress?: pulumi.Input<string>;
    /**
     * IPv6 address + prefix length to be configured on Cloud Router Interface for this interconnect attachment.
     */
    cloudRouterIpv6Address?: pulumi.Input<string>;
    /**
     * Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: pulumi.Input<string>;
    /**
     * IPv4 address + prefix length to be configured on the customer router subinterface for this interconnect attachment.
     */
    customerRouterIpAddress?: pulumi.Input<string>;
    /**
     * IPv6 address + prefix length to be configured on the customer router subinterface for this interconnect attachment.
     */
    customerRouterIpv6Address?: pulumi.Input<string>;
    /**
     * An optional description of this resource.
     */
    description?: pulumi.Input<string>;
    /**
     * Desired availability domain for the attachment. Only available for type PARTNER, at creation time. For improved
     * reliability, customers should configure a pair of attachments with one per availability domain. The selected
     * availability domain will be provided to the Partner via the pairing key so that the provisioned circuit will lie in the
     * specified domain. If not specified, the value will default to AVAILABILITY_DOMAIN_ANY.
     */
    edgeAvailabilityDomain?: pulumi.Input<string>;
    /**
     * Indicates the user-supplied encryption option of this interconnect attachment. Can only be specified at attachment
     * creation for PARTNER or DEDICATED attachments. * NONE - This is the default value, which means that the VLAN attachment
     * carries unencrypted traffic. VMs are able to send traffic to, or receive traffic from, such a VLAN attachment. * IPSEC -
     * The VLAN attachment carries only encrypted traffic that is encrypted by an IPsec device, such as an HA VPN gateway or
     * third-party IPsec VPN. VMs cannot directly send traffic to, or receive traffic from, such a VLAN attachment. To use HA
     * VPN over Cloud Interconnect, the VLAN attachment must be created with this option. Default value: "NONE" Possible
     * values: ["NONE", "IPSEC"]
     */
    encryption?: pulumi.Input<string>;
    /**
     * Google reference ID, to be used when raising support tickets with Google or otherwise to debug backend connectivity
     * issues.
     */
    googleReferenceId?: pulumi.Input<string>;
    /**
     * URL of the underlying Interconnect object that this attachment's traffic will traverse through. Required if type is
     * DEDICATED, must not be set if type is PARTNER.
     */
    interconnect?: pulumi.Input<string>;
    /**
     * URL of addresses that have been reserved for the interconnect attachment, Used only for interconnect attachment that has
     * the encryption option as IPSEC. The addresses must be RFC 1918 IP address ranges. When creating HA VPN gateway over the
     * interconnect attachment, if the attachment is configured to use an RFC 1918 IP address, then the VPN gateway's IP
     * address will be allocated from the IP address range specified here. For example, if the HA VPN gateway's interface 0 is
     * paired to this interconnect attachment, then an RFC 1918 IP address for the VPN gateway interface 0 will be allocated
     * from the IP address specified for this interconnect attachment. If this field is not specified for interconnect
     * attachment that has encryption option as IPSEC, later on when creating HA VPN gateway on this interconnect attachment,
     * the HA VPN gateway's IP address will be allocated from regional external IP address pool.
     */
    ipsecInternalAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Maximum Transmission Unit (MTU), in bytes, of packets passing through this interconnect attachment. Currently, only 1440
     * and 1500 are allowed. If not specified, the value will default to 1440.
     */
    mtu?: pulumi.Input<string>;
    /**
     * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and
     * comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression 'a-z?' which
     * means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or
     * digit, except the last character, which cannot be a dash.
     */
    name?: pulumi.Input<string>;
    /**
     * [Output only for type PARTNER. Not present for DEDICATED]. The opaque identifier of an PARTNER attachment used to
     * initiate provisioning with a selected partner. Of the form "XXXXX/region/domain"
     */
    pairingKey?: pulumi.Input<string>;
    /**
     * [Output only for type PARTNER. Not present for DEDICATED]. Optional BGP ASN for the router that should be supplied by a
     * layer 3 Partner if they configured BGP on behalf of the customer.
     */
    partnerAsn?: pulumi.Input<string>;
    /**
     * Information specific to an InterconnectAttachment. This property is populated if the interconnect that this is attached
     * to is of type DEDICATED.
     */
    privateInterconnectInfos?: pulumi.Input<pulumi.Input<inputs.ComputeInterconnectAttachmentPrivateInterconnectInfo>[]>;
    project?: pulumi.Input<string>;
    /**
     * Region where the regional interconnect attachment resides.
     */
    region?: pulumi.Input<string>;
    /**
     * URL of the cloud router to be used for dynamic routing. This router must be in the same region as this
     * InterconnectAttachment. The InterconnectAttachment will automatically connect the Interconnect to the network & region
     * within which the Cloud Router is configured.
     */
    router?: pulumi.Input<string>;
    selfLink?: pulumi.Input<string>;
    /**
     * The stack type for this interconnect attachment to identify whether the IPv6 feature is enabled or not. If not
     * specified, IPV4_ONLY will be used. This field can be both set at interconnect attachments creation and update
     * interconnect attachment operations. Possible values: ["IPV4_IPV6", "IPV4_ONLY"]
     */
    stackType?: pulumi.Input<string>;
    /**
     * [Output Only] The current state of this attachment's functionality.
     */
    state?: pulumi.Input<string>;
    /**
     * Length of the IPv4 subnet mask. Allowed values: 29 (default), 30. The default value is 29, except for Cross-Cloud
     * Interconnect connections that use an InterconnectRemoteLocation with a constraints.subnetLengthRange.min equal to 30.
     * For example, connections that use an Azure remote location fall into this category. In these cases, the default value is
     * 30, and requesting 29 returns an error. Where both 29 and 30 are allowed, 29 is preferred, because it gives Google Cloud
     * Support more debugging visibility.
     */
    subnetLength?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.ComputeInterconnectAttachmentTimeouts>;
    /**
     * The type of InterconnectAttachment you wish to create. Defaults to DEDICATED. Possible values: ["DEDICATED", "PARTNER",
     * "PARTNER_PROVIDER"]
     */
    type?: pulumi.Input<string>;
    /**
     * The IEEE 802.1Q VLAN tag for this attachment, in the range 2-4094. When using PARTNER type this will be managed
     * upstream.
     */
    vlanTag8021q?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a ComputeInterconnectAttachment resource.
 */
export interface ComputeInterconnectAttachmentArgs {
    /**
     * Whether the VLAN attachment is enabled or disabled. When using PARTNER type this will Pre-Activate the interconnect
     * attachment
     */
    adminEnabled?: pulumi.Input<boolean>;
    /**
     * Provisioned bandwidth capacity for the interconnect attachment. For attachments of type DEDICATED, the user can set the
     * bandwidth. For attachments of type PARTNER, the Google Partner that is operating the interconnect must set the
     * bandwidth. Output only for PARTNER type, mutable for PARTNER_PROVIDER and DEDICATED, Defaults to BPS_10G Possible
     * values: ["BPS_50M", "BPS_100M", "BPS_200M", "BPS_300M", "BPS_400M", "BPS_500M", "BPS_1G", "BPS_2G", "BPS_5G", "BPS_10G",
     * "BPS_20G", "BPS_50G"]
     */
    bandwidth?: pulumi.Input<string>;
    /**
     * Up to 16 candidate prefixes that can be used to restrict the allocation of cloudRouterIpAddress and
     * customerRouterIpAddress for this attachment. All prefixes must be within link-local address space (169.254.0.0/16) and
     * must be /29 or shorter (/28, /27, etc). Google will attempt to select an unused /29 from the supplied candidate
     * prefix(es). The request will fail if all possible /29s are in use on Google's edge. If not supplied, Google will
     * randomly select an unused /29 from all of link-local space.
     */
    candidateSubnets?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An optional description of this resource.
     */
    description?: pulumi.Input<string>;
    /**
     * Desired availability domain for the attachment. Only available for type PARTNER, at creation time. For improved
     * reliability, customers should configure a pair of attachments with one per availability domain. The selected
     * availability domain will be provided to the Partner via the pairing key so that the provisioned circuit will lie in the
     * specified domain. If not specified, the value will default to AVAILABILITY_DOMAIN_ANY.
     */
    edgeAvailabilityDomain?: pulumi.Input<string>;
    /**
     * Indicates the user-supplied encryption option of this interconnect attachment. Can only be specified at attachment
     * creation for PARTNER or DEDICATED attachments. * NONE - This is the default value, which means that the VLAN attachment
     * carries unencrypted traffic. VMs are able to send traffic to, or receive traffic from, such a VLAN attachment. * IPSEC -
     * The VLAN attachment carries only encrypted traffic that is encrypted by an IPsec device, such as an HA VPN gateway or
     * third-party IPsec VPN. VMs cannot directly send traffic to, or receive traffic from, such a VLAN attachment. To use HA
     * VPN over Cloud Interconnect, the VLAN attachment must be created with this option. Default value: "NONE" Possible
     * values: ["NONE", "IPSEC"]
     */
    encryption?: pulumi.Input<string>;
    /**
     * URL of the underlying Interconnect object that this attachment's traffic will traverse through. Required if type is
     * DEDICATED, must not be set if type is PARTNER.
     */
    interconnect?: pulumi.Input<string>;
    /**
     * URL of addresses that have been reserved for the interconnect attachment, Used only for interconnect attachment that has
     * the encryption option as IPSEC. The addresses must be RFC 1918 IP address ranges. When creating HA VPN gateway over the
     * interconnect attachment, if the attachment is configured to use an RFC 1918 IP address, then the VPN gateway's IP
     * address will be allocated from the IP address range specified here. For example, if the HA VPN gateway's interface 0 is
     * paired to this interconnect attachment, then an RFC 1918 IP address for the VPN gateway interface 0 will be allocated
     * from the IP address specified for this interconnect attachment. If this field is not specified for interconnect
     * attachment that has encryption option as IPSEC, later on when creating HA VPN gateway on this interconnect attachment,
     * the HA VPN gateway's IP address will be allocated from regional external IP address pool.
     */
    ipsecInternalAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Maximum Transmission Unit (MTU), in bytes, of packets passing through this interconnect attachment. Currently, only 1440
     * and 1500 are allowed. If not specified, the value will default to 1440.
     */
    mtu?: pulumi.Input<string>;
    /**
     * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and
     * comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression 'a-z?' which
     * means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or
     * digit, except the last character, which cannot be a dash.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * Region where the regional interconnect attachment resides.
     */
    region?: pulumi.Input<string>;
    /**
     * URL of the cloud router to be used for dynamic routing. This router must be in the same region as this
     * InterconnectAttachment. The InterconnectAttachment will automatically connect the Interconnect to the network & region
     * within which the Cloud Router is configured.
     */
    router: pulumi.Input<string>;
    /**
     * The stack type for this interconnect attachment to identify whether the IPv6 feature is enabled or not. If not
     * specified, IPV4_ONLY will be used. This field can be both set at interconnect attachments creation and update
     * interconnect attachment operations. Possible values: ["IPV4_IPV6", "IPV4_ONLY"]
     */
    stackType?: pulumi.Input<string>;
    /**
     * Length of the IPv4 subnet mask. Allowed values: 29 (default), 30. The default value is 29, except for Cross-Cloud
     * Interconnect connections that use an InterconnectRemoteLocation with a constraints.subnetLengthRange.min equal to 30.
     * For example, connections that use an Azure remote location fall into this category. In these cases, the default value is
     * 30, and requesting 29 returns an error. Where both 29 and 30 are allowed, 29 is preferred, because it gives Google Cloud
     * Support more debugging visibility.
     */
    subnetLength?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.ComputeInterconnectAttachmentTimeouts>;
    /**
     * The type of InterconnectAttachment you wish to create. Defaults to DEDICATED. Possible values: ["DEDICATED", "PARTNER",
     * "PARTNER_PROVIDER"]
     */
    type?: pulumi.Input<string>;
    /**
     * The IEEE 802.1Q VLAN tag for this attachment, in the range 2-4094. When using PARTNER type this will be managed
     * upstream.
     */
    vlanTag8021q?: pulumi.Input<number>;
}
