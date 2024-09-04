// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class AppsecIpGeo extends pulumi.CustomResource {
    /**
     * Get an existing AppsecIpGeo resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AppsecIpGeoState, opts?: pulumi.CustomResourceOptions): AppsecIpGeo {
        return new AppsecIpGeo(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'akamai:index/appsecIpGeo:AppsecIpGeo';

    /**
     * Returns true if the given object is an instance of AppsecIpGeo.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AppsecIpGeo {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AppsecIpGeo.__pulumiType;
    }

    /**
     * List of IDs of ASN network list to be blocked
     */
    public readonly asnNetworkLists!: pulumi.Output<string[] | undefined>;
    /**
     * Unique identifier of the security configuration
     */
    public readonly configId!: pulumi.Output<number>;
    /**
     * List of IDs of network list that are always allowed
     */
    public readonly exceptionIpNetworkLists!: pulumi.Output<string[] | undefined>;
    /**
     * List of IDs of geographic network list to be blocked
     */
    public readonly geoNetworkLists!: pulumi.Output<string[] | undefined>;
    /**
     * List of IDs of IP network list to be blocked
     */
    public readonly ipNetworkLists!: pulumi.Output<string[] | undefined>;
    /**
     * Protection mode (block or allow)
     */
    public readonly mode!: pulumi.Output<string>;
    /**
     * Unique identifier of the security policy
     */
    public readonly securityPolicyId!: pulumi.Output<string>;
    /**
     * Action set for Ukraine geo control
     */
    public readonly ukraineGeoControlAction!: pulumi.Output<string | undefined>;

    /**
     * Create a AppsecIpGeo resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AppsecIpGeoArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AppsecIpGeoArgs | AppsecIpGeoState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AppsecIpGeoState | undefined;
            resourceInputs["asnNetworkLists"] = state ? state.asnNetworkLists : undefined;
            resourceInputs["configId"] = state ? state.configId : undefined;
            resourceInputs["exceptionIpNetworkLists"] = state ? state.exceptionIpNetworkLists : undefined;
            resourceInputs["geoNetworkLists"] = state ? state.geoNetworkLists : undefined;
            resourceInputs["ipNetworkLists"] = state ? state.ipNetworkLists : undefined;
            resourceInputs["mode"] = state ? state.mode : undefined;
            resourceInputs["securityPolicyId"] = state ? state.securityPolicyId : undefined;
            resourceInputs["ukraineGeoControlAction"] = state ? state.ukraineGeoControlAction : undefined;
        } else {
            const args = argsOrState as AppsecIpGeoArgs | undefined;
            if ((!args || args.configId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'configId'");
            }
            if ((!args || args.mode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mode'");
            }
            if ((!args || args.securityPolicyId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'securityPolicyId'");
            }
            resourceInputs["asnNetworkLists"] = args ? args.asnNetworkLists : undefined;
            resourceInputs["configId"] = args ? args.configId : undefined;
            resourceInputs["exceptionIpNetworkLists"] = args ? args.exceptionIpNetworkLists : undefined;
            resourceInputs["geoNetworkLists"] = args ? args.geoNetworkLists : undefined;
            resourceInputs["ipNetworkLists"] = args ? args.ipNetworkLists : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["securityPolicyId"] = args ? args.securityPolicyId : undefined;
            resourceInputs["ukraineGeoControlAction"] = args ? args.ukraineGeoControlAction : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AppsecIpGeo.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AppsecIpGeo resources.
 */
export interface AppsecIpGeoState {
    /**
     * List of IDs of ASN network list to be blocked
     */
    asnNetworkLists?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Unique identifier of the security configuration
     */
    configId?: pulumi.Input<number>;
    /**
     * List of IDs of network list that are always allowed
     */
    exceptionIpNetworkLists?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of IDs of geographic network list to be blocked
     */
    geoNetworkLists?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of IDs of IP network list to be blocked
     */
    ipNetworkLists?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Protection mode (block or allow)
     */
    mode?: pulumi.Input<string>;
    /**
     * Unique identifier of the security policy
     */
    securityPolicyId?: pulumi.Input<string>;
    /**
     * Action set for Ukraine geo control
     */
    ukraineGeoControlAction?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AppsecIpGeo resource.
 */
export interface AppsecIpGeoArgs {
    /**
     * List of IDs of ASN network list to be blocked
     */
    asnNetworkLists?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Unique identifier of the security configuration
     */
    configId: pulumi.Input<number>;
    /**
     * List of IDs of network list that are always allowed
     */
    exceptionIpNetworkLists?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of IDs of geographic network list to be blocked
     */
    geoNetworkLists?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of IDs of IP network list to be blocked
     */
    ipNetworkLists?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Protection mode (block or allow)
     */
    mode: pulumi.Input<string>;
    /**
     * Unique identifier of the security policy
     */
    securityPolicyId: pulumi.Input<string>;
    /**
     * Action set for Ukraine geo control
     */
    ukraineGeoControlAction?: pulumi.Input<string>;
}
