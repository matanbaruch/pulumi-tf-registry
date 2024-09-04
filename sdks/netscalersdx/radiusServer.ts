// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class RadiusServer extends pulumi.CustomResource {
    /**
     * Get an existing RadiusServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RadiusServerState, opts?: pulumi.CustomResourceOptions): RadiusServer {
        return new RadiusServer(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'netscalersdx:index/radiusServer:RadiusServer';

    /**
     * Returns true if the given object is an instance of RadiusServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RadiusServer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RadiusServer.__pulumiType;
    }

    /**
     * Enable accounting in the radius server.
     */
    public readonly accounting!: pulumi.Output<boolean | undefined>;
    /**
     * Configuration Type. Values: 0: IPv4, 1: IPv6, -1: Hostname.
     */
    public readonly addressType!: pulumi.Output<number | undefined>;
    /**
     * Attribute type for RADIUS group extraction. Maximum value =
     */
    public readonly attributeType!: pulumi.Output<number | undefined>;
    /**
     * The maximum number of seconds the system will wait for a response from the Radius server. Maximum value =
     */
    public readonly authTimeout!: pulumi.Output<number | undefined>;
    /**
     * This is the default group that is chosen when the authentication succeeds in addition to extracted groups. Maximum
     * length = 64
     */
    public readonly defaultAuthenticationGroup!: pulumi.Output<string | undefined>;
    /**
     * Enable NAS IP extraction.
     */
    public readonly enableNasIp!: pulumi.Output<boolean | undefined>;
    /**
     * Group separator string that delimits group names within a RADIUS attribute for RADIUS group extraction. Maximum length =
     * 7
     */
    public readonly groupSeparator!: pulumi.Output<string | undefined>;
    /**
     * Prefix string that precedes group names within a RADIUS attribute for RADIUS group extraction. Maximum length = 31
     */
    public readonly groupsPrefix!: pulumi.Output<string | undefined>;
    /**
     * IP Address of radius server. Minimum length = 1 Maximum length = 64
     */
    public readonly ipAddress!: pulumi.Output<string>;
    /**
     * The attribute type of the remote IP address attribute in a RADIUS response. Maximum value =
     */
    public readonly ipAttributeType!: pulumi.Output<number | undefined>;
    /**
     * The vendor ID of the attribute in the RADIUS response which denotes the intranet IP. Maximum value =
     */
    public readonly ipVendorId!: pulumi.Output<number | undefined>;
    /**
     * Name of radius server. Minimum length = 1 Maximum length = 128
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * NAS ID. Maximum length = 128
     */
    public readonly nasId!: pulumi.Output<string | undefined>;
    /**
     * Enable password encoding in RADIUS packets send to the RADIUS server.
     */
    public readonly passEncoding!: pulumi.Output<string | undefined>;
    /**
     * Port number of radius server. Minimum value = 1 Maximum value =
     */
    public readonly port!: pulumi.Output<number | undefined>;
    /**
     * The attribute type of the password attribute in a RADIUS response.. Maximum value =
     */
    public readonly pwdAttributeType!: pulumi.Output<number | undefined>;
    /**
     * Vendor ID of the password in the RADIUS response. Used to extract the user password. Maximum value =
     */
    public readonly pwdVendorId!: pulumi.Output<number | undefined>;
    /**
     * Key of radius server. Minimum length = 4 Maximum length = 32
     */
    public readonly radiusKey!: pulumi.Output<string>;
    /**
     * Vendor ID for RADIUS group extraction. Maximum value =
     */
    public readonly vendorId!: pulumi.Output<number | undefined>;

    /**
     * Create a RadiusServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RadiusServerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RadiusServerArgs | RadiusServerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RadiusServerState | undefined;
            resourceInputs["accounting"] = state ? state.accounting : undefined;
            resourceInputs["addressType"] = state ? state.addressType : undefined;
            resourceInputs["attributeType"] = state ? state.attributeType : undefined;
            resourceInputs["authTimeout"] = state ? state.authTimeout : undefined;
            resourceInputs["defaultAuthenticationGroup"] = state ? state.defaultAuthenticationGroup : undefined;
            resourceInputs["enableNasIp"] = state ? state.enableNasIp : undefined;
            resourceInputs["groupSeparator"] = state ? state.groupSeparator : undefined;
            resourceInputs["groupsPrefix"] = state ? state.groupsPrefix : undefined;
            resourceInputs["ipAddress"] = state ? state.ipAddress : undefined;
            resourceInputs["ipAttributeType"] = state ? state.ipAttributeType : undefined;
            resourceInputs["ipVendorId"] = state ? state.ipVendorId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nasId"] = state ? state.nasId : undefined;
            resourceInputs["passEncoding"] = state ? state.passEncoding : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["pwdAttributeType"] = state ? state.pwdAttributeType : undefined;
            resourceInputs["pwdVendorId"] = state ? state.pwdVendorId : undefined;
            resourceInputs["radiusKey"] = state ? state.radiusKey : undefined;
            resourceInputs["vendorId"] = state ? state.vendorId : undefined;
        } else {
            const args = argsOrState as RadiusServerArgs | undefined;
            if ((!args || args.ipAddress === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ipAddress'");
            }
            if ((!args || args.radiusKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'radiusKey'");
            }
            resourceInputs["accounting"] = args ? args.accounting : undefined;
            resourceInputs["addressType"] = args ? args.addressType : undefined;
            resourceInputs["attributeType"] = args ? args.attributeType : undefined;
            resourceInputs["authTimeout"] = args ? args.authTimeout : undefined;
            resourceInputs["defaultAuthenticationGroup"] = args ? args.defaultAuthenticationGroup : undefined;
            resourceInputs["enableNasIp"] = args ? args.enableNasIp : undefined;
            resourceInputs["groupSeparator"] = args ? args.groupSeparator : undefined;
            resourceInputs["groupsPrefix"] = args ? args.groupsPrefix : undefined;
            resourceInputs["ipAddress"] = args ? args.ipAddress : undefined;
            resourceInputs["ipAttributeType"] = args ? args.ipAttributeType : undefined;
            resourceInputs["ipVendorId"] = args ? args.ipVendorId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nasId"] = args ? args.nasId : undefined;
            resourceInputs["passEncoding"] = args ? args.passEncoding : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["pwdAttributeType"] = args ? args.pwdAttributeType : undefined;
            resourceInputs["pwdVendorId"] = args ? args.pwdVendorId : undefined;
            resourceInputs["radiusKey"] = args ? args.radiusKey : undefined;
            resourceInputs["vendorId"] = args ? args.vendorId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RadiusServer.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RadiusServer resources.
 */
export interface RadiusServerState {
    /**
     * Enable accounting in the radius server.
     */
    accounting?: pulumi.Input<boolean>;
    /**
     * Configuration Type. Values: 0: IPv4, 1: IPv6, -1: Hostname.
     */
    addressType?: pulumi.Input<number>;
    /**
     * Attribute type for RADIUS group extraction. Maximum value =
     */
    attributeType?: pulumi.Input<number>;
    /**
     * The maximum number of seconds the system will wait for a response from the Radius server. Maximum value =
     */
    authTimeout?: pulumi.Input<number>;
    /**
     * This is the default group that is chosen when the authentication succeeds in addition to extracted groups. Maximum
     * length = 64
     */
    defaultAuthenticationGroup?: pulumi.Input<string>;
    /**
     * Enable NAS IP extraction.
     */
    enableNasIp?: pulumi.Input<boolean>;
    /**
     * Group separator string that delimits group names within a RADIUS attribute for RADIUS group extraction. Maximum length =
     * 7
     */
    groupSeparator?: pulumi.Input<string>;
    /**
     * Prefix string that precedes group names within a RADIUS attribute for RADIUS group extraction. Maximum length = 31
     */
    groupsPrefix?: pulumi.Input<string>;
    /**
     * IP Address of radius server. Minimum length = 1 Maximum length = 64
     */
    ipAddress?: pulumi.Input<string>;
    /**
     * The attribute type of the remote IP address attribute in a RADIUS response. Maximum value =
     */
    ipAttributeType?: pulumi.Input<number>;
    /**
     * The vendor ID of the attribute in the RADIUS response which denotes the intranet IP. Maximum value =
     */
    ipVendorId?: pulumi.Input<number>;
    /**
     * Name of radius server. Minimum length = 1 Maximum length = 128
     */
    name?: pulumi.Input<string>;
    /**
     * NAS ID. Maximum length = 128
     */
    nasId?: pulumi.Input<string>;
    /**
     * Enable password encoding in RADIUS packets send to the RADIUS server.
     */
    passEncoding?: pulumi.Input<string>;
    /**
     * Port number of radius server. Minimum value = 1 Maximum value =
     */
    port?: pulumi.Input<number>;
    /**
     * The attribute type of the password attribute in a RADIUS response.. Maximum value =
     */
    pwdAttributeType?: pulumi.Input<number>;
    /**
     * Vendor ID of the password in the RADIUS response. Used to extract the user password. Maximum value =
     */
    pwdVendorId?: pulumi.Input<number>;
    /**
     * Key of radius server. Minimum length = 4 Maximum length = 32
     */
    radiusKey?: pulumi.Input<string>;
    /**
     * Vendor ID for RADIUS group extraction. Maximum value =
     */
    vendorId?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a RadiusServer resource.
 */
export interface RadiusServerArgs {
    /**
     * Enable accounting in the radius server.
     */
    accounting?: pulumi.Input<boolean>;
    /**
     * Configuration Type. Values: 0: IPv4, 1: IPv6, -1: Hostname.
     */
    addressType?: pulumi.Input<number>;
    /**
     * Attribute type for RADIUS group extraction. Maximum value =
     */
    attributeType?: pulumi.Input<number>;
    /**
     * The maximum number of seconds the system will wait for a response from the Radius server. Maximum value =
     */
    authTimeout?: pulumi.Input<number>;
    /**
     * This is the default group that is chosen when the authentication succeeds in addition to extracted groups. Maximum
     * length = 64
     */
    defaultAuthenticationGroup?: pulumi.Input<string>;
    /**
     * Enable NAS IP extraction.
     */
    enableNasIp?: pulumi.Input<boolean>;
    /**
     * Group separator string that delimits group names within a RADIUS attribute for RADIUS group extraction. Maximum length =
     * 7
     */
    groupSeparator?: pulumi.Input<string>;
    /**
     * Prefix string that precedes group names within a RADIUS attribute for RADIUS group extraction. Maximum length = 31
     */
    groupsPrefix?: pulumi.Input<string>;
    /**
     * IP Address of radius server. Minimum length = 1 Maximum length = 64
     */
    ipAddress: pulumi.Input<string>;
    /**
     * The attribute type of the remote IP address attribute in a RADIUS response. Maximum value =
     */
    ipAttributeType?: pulumi.Input<number>;
    /**
     * The vendor ID of the attribute in the RADIUS response which denotes the intranet IP. Maximum value =
     */
    ipVendorId?: pulumi.Input<number>;
    /**
     * Name of radius server. Minimum length = 1 Maximum length = 128
     */
    name?: pulumi.Input<string>;
    /**
     * NAS ID. Maximum length = 128
     */
    nasId?: pulumi.Input<string>;
    /**
     * Enable password encoding in RADIUS packets send to the RADIUS server.
     */
    passEncoding?: pulumi.Input<string>;
    /**
     * Port number of radius server. Minimum value = 1 Maximum value =
     */
    port?: pulumi.Input<number>;
    /**
     * The attribute type of the password attribute in a RADIUS response.. Maximum value =
     */
    pwdAttributeType?: pulumi.Input<number>;
    /**
     * Vendor ID of the password in the RADIUS response. Used to extract the user password. Maximum value =
     */
    pwdVendorId?: pulumi.Input<number>;
    /**
     * Key of radius server. Minimum length = 4 Maximum length = 32
     */
    radiusKey: pulumi.Input<string>;
    /**
     * Vendor ID for RADIUS group extraction. Maximum value =
     */
    vendorId?: pulumi.Input<number>;
}
