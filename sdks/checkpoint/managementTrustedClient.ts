// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ManagementTrustedClient extends pulumi.CustomResource {
    /**
     * Get an existing ManagementTrustedClient resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ManagementTrustedClientState, opts?: pulumi.CustomResourceOptions): ManagementTrustedClient {
        return new ManagementTrustedClient(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'checkpoint:index/managementTrustedClient:ManagementTrustedClient';

    /**
     * Returns true if the given object is an instance of ManagementTrustedClient.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagementTrustedClient {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagementTrustedClient.__pulumiType;
    }

    /**
     * Color of the object. Should be one of existing colors.
     */
    public readonly color!: pulumi.Output<string | undefined>;
    /**
     * Comments string.
     */
    public readonly comments!: pulumi.Output<string | undefined>;
    /**
     * Domains to be added to this profile. Use domain name only. See example below: "add-trusted-client (with domain)".
     */
    public readonly domainsAssignments!: pulumi.Output<string[] | undefined>;
    /**
     * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted -
     * warnings will also be ignored.
     */
    public readonly ignoreErrors!: pulumi.Output<boolean | undefined>;
    /**
     * Apply changes ignoring warnings.
     */
    public readonly ignoreWarnings!: pulumi.Output<boolean | undefined>;
    /**
     * IPv4 address.
     */
    public readonly ipv4Address!: pulumi.Output<string | undefined>;
    /**
     * First IPv4 address in the range.
     */
    public readonly ipv4AddressFirst!: pulumi.Output<string | undefined>;
    /**
     * Last IPv4 address in the range.
     */
    public readonly ipv4AddressLast!: pulumi.Output<string | undefined>;
    /**
     * IPv6 address.
     */
    public readonly ipv6Address!: pulumi.Output<string | undefined>;
    /**
     * First IPv6 address in the range.
     */
    public readonly ipv6AddressFirst!: pulumi.Output<string | undefined>;
    /**
     * Last IPv6 address in the range.
     */
    public readonly ipv6AddressLast!: pulumi.Output<string | undefined>;
    /**
     * IPv4 mask length.
     */
    public readonly maskLength4!: pulumi.Output<number | undefined>;
    /**
     * IPv6 mask length.
     */
    public readonly maskLength6!: pulumi.Output<number | undefined>;
    /**
     * Let this trusted client connect to all Multi-Domain Servers in the deployment.
     */
    public readonly multiDomainServerTrustedClient!: pulumi.Output<boolean | undefined>;
    /**
     * Object name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Collection of tag identifiers.
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    /**
     * Trusted client type.
     */
    public readonly type!: pulumi.Output<string | undefined>;
    /**
     * IP wild card (e.g. 192.0.2.*).
     */
    public readonly wildCard!: pulumi.Output<string | undefined>;

    /**
     * Create a ManagementTrustedClient resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ManagementTrustedClientArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ManagementTrustedClientArgs | ManagementTrustedClientState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ManagementTrustedClientState | undefined;
            resourceInputs["color"] = state ? state.color : undefined;
            resourceInputs["comments"] = state ? state.comments : undefined;
            resourceInputs["domainsAssignments"] = state ? state.domainsAssignments : undefined;
            resourceInputs["ignoreErrors"] = state ? state.ignoreErrors : undefined;
            resourceInputs["ignoreWarnings"] = state ? state.ignoreWarnings : undefined;
            resourceInputs["ipv4Address"] = state ? state.ipv4Address : undefined;
            resourceInputs["ipv4AddressFirst"] = state ? state.ipv4AddressFirst : undefined;
            resourceInputs["ipv4AddressLast"] = state ? state.ipv4AddressLast : undefined;
            resourceInputs["ipv6Address"] = state ? state.ipv6Address : undefined;
            resourceInputs["ipv6AddressFirst"] = state ? state.ipv6AddressFirst : undefined;
            resourceInputs["ipv6AddressLast"] = state ? state.ipv6AddressLast : undefined;
            resourceInputs["maskLength4"] = state ? state.maskLength4 : undefined;
            resourceInputs["maskLength6"] = state ? state.maskLength6 : undefined;
            resourceInputs["multiDomainServerTrustedClient"] = state ? state.multiDomainServerTrustedClient : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["wildCard"] = state ? state.wildCard : undefined;
        } else {
            const args = argsOrState as ManagementTrustedClientArgs | undefined;
            resourceInputs["color"] = args ? args.color : undefined;
            resourceInputs["comments"] = args ? args.comments : undefined;
            resourceInputs["domainsAssignments"] = args ? args.domainsAssignments : undefined;
            resourceInputs["ignoreErrors"] = args ? args.ignoreErrors : undefined;
            resourceInputs["ignoreWarnings"] = args ? args.ignoreWarnings : undefined;
            resourceInputs["ipv4Address"] = args ? args.ipv4Address : undefined;
            resourceInputs["ipv4AddressFirst"] = args ? args.ipv4AddressFirst : undefined;
            resourceInputs["ipv4AddressLast"] = args ? args.ipv4AddressLast : undefined;
            resourceInputs["ipv6Address"] = args ? args.ipv6Address : undefined;
            resourceInputs["ipv6AddressFirst"] = args ? args.ipv6AddressFirst : undefined;
            resourceInputs["ipv6AddressLast"] = args ? args.ipv6AddressLast : undefined;
            resourceInputs["maskLength4"] = args ? args.maskLength4 : undefined;
            resourceInputs["maskLength6"] = args ? args.maskLength6 : undefined;
            resourceInputs["multiDomainServerTrustedClient"] = args ? args.multiDomainServerTrustedClient : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["wildCard"] = args ? args.wildCard : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ManagementTrustedClient.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ManagementTrustedClient resources.
 */
export interface ManagementTrustedClientState {
    /**
     * Color of the object. Should be one of existing colors.
     */
    color?: pulumi.Input<string>;
    /**
     * Comments string.
     */
    comments?: pulumi.Input<string>;
    /**
     * Domains to be added to this profile. Use domain name only. See example below: "add-trusted-client (with domain)".
     */
    domainsAssignments?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted -
     * warnings will also be ignored.
     */
    ignoreErrors?: pulumi.Input<boolean>;
    /**
     * Apply changes ignoring warnings.
     */
    ignoreWarnings?: pulumi.Input<boolean>;
    /**
     * IPv4 address.
     */
    ipv4Address?: pulumi.Input<string>;
    /**
     * First IPv4 address in the range.
     */
    ipv4AddressFirst?: pulumi.Input<string>;
    /**
     * Last IPv4 address in the range.
     */
    ipv4AddressLast?: pulumi.Input<string>;
    /**
     * IPv6 address.
     */
    ipv6Address?: pulumi.Input<string>;
    /**
     * First IPv6 address in the range.
     */
    ipv6AddressFirst?: pulumi.Input<string>;
    /**
     * Last IPv6 address in the range.
     */
    ipv6AddressLast?: pulumi.Input<string>;
    /**
     * IPv4 mask length.
     */
    maskLength4?: pulumi.Input<number>;
    /**
     * IPv6 mask length.
     */
    maskLength6?: pulumi.Input<number>;
    /**
     * Let this trusted client connect to all Multi-Domain Servers in the deployment.
     */
    multiDomainServerTrustedClient?: pulumi.Input<boolean>;
    /**
     * Object name.
     */
    name?: pulumi.Input<string>;
    /**
     * Collection of tag identifiers.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Trusted client type.
     */
    type?: pulumi.Input<string>;
    /**
     * IP wild card (e.g. 192.0.2.*).
     */
    wildCard?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ManagementTrustedClient resource.
 */
export interface ManagementTrustedClientArgs {
    /**
     * Color of the object. Should be one of existing colors.
     */
    color?: pulumi.Input<string>;
    /**
     * Comments string.
     */
    comments?: pulumi.Input<string>;
    /**
     * Domains to be added to this profile. Use domain name only. See example below: "add-trusted-client (with domain)".
     */
    domainsAssignments?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted -
     * warnings will also be ignored.
     */
    ignoreErrors?: pulumi.Input<boolean>;
    /**
     * Apply changes ignoring warnings.
     */
    ignoreWarnings?: pulumi.Input<boolean>;
    /**
     * IPv4 address.
     */
    ipv4Address?: pulumi.Input<string>;
    /**
     * First IPv4 address in the range.
     */
    ipv4AddressFirst?: pulumi.Input<string>;
    /**
     * Last IPv4 address in the range.
     */
    ipv4AddressLast?: pulumi.Input<string>;
    /**
     * IPv6 address.
     */
    ipv6Address?: pulumi.Input<string>;
    /**
     * First IPv6 address in the range.
     */
    ipv6AddressFirst?: pulumi.Input<string>;
    /**
     * Last IPv6 address in the range.
     */
    ipv6AddressLast?: pulumi.Input<string>;
    /**
     * IPv4 mask length.
     */
    maskLength4?: pulumi.Input<number>;
    /**
     * IPv6 mask length.
     */
    maskLength6?: pulumi.Input<number>;
    /**
     * Let this trusted client connect to all Multi-Domain Servers in the deployment.
     */
    multiDomainServerTrustedClient?: pulumi.Input<boolean>;
    /**
     * Object name.
     */
    name?: pulumi.Input<string>;
    /**
     * Collection of tag identifiers.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Trusted client type.
     */
    type?: pulumi.Input<string>;
    /**
     * IP wild card (e.g. 192.0.2.*).
     */
    wildCard?: pulumi.Input<string>;
}
