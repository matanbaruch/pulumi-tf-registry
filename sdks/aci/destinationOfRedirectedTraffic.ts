// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DestinationOfRedirectedTraffic extends pulumi.CustomResource {
    /**
     * Get an existing DestinationOfRedirectedTraffic resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DestinationOfRedirectedTrafficState, opts?: pulumi.CustomResourceOptions): DestinationOfRedirectedTraffic {
        return new DestinationOfRedirectedTraffic(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aci:index/destinationOfRedirectedTraffic:DestinationOfRedirectedTraffic';

    /**
     * Returns true if the given object is an instance of DestinationOfRedirectedTraffic.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DestinationOfRedirectedTraffic {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DestinationOfRedirectedTraffic.__pulumiType;
    }

    public readonly annotation!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string>;
    public readonly destName!: pulumi.Output<string>;
    public readonly ip!: pulumi.Output<string>;
    public readonly ip2!: pulumi.Output<string>;
    public readonly mac!: pulumi.Output<string | undefined>;
    public readonly nameAlias!: pulumi.Output<string>;
    public readonly podId!: pulumi.Output<string>;
    public readonly relationVnsRsRedirectHealthGroup!: pulumi.Output<string | undefined>;
    public readonly serviceRedirectPolicyDn!: pulumi.Output<string>;

    /**
     * Create a DestinationOfRedirectedTraffic resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DestinationOfRedirectedTrafficArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DestinationOfRedirectedTrafficArgs | DestinationOfRedirectedTrafficState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DestinationOfRedirectedTrafficState | undefined;
            resourceInputs["annotation"] = state ? state.annotation : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["destName"] = state ? state.destName : undefined;
            resourceInputs["ip"] = state ? state.ip : undefined;
            resourceInputs["ip2"] = state ? state.ip2 : undefined;
            resourceInputs["mac"] = state ? state.mac : undefined;
            resourceInputs["nameAlias"] = state ? state.nameAlias : undefined;
            resourceInputs["podId"] = state ? state.podId : undefined;
            resourceInputs["relationVnsRsRedirectHealthGroup"] = state ? state.relationVnsRsRedirectHealthGroup : undefined;
            resourceInputs["serviceRedirectPolicyDn"] = state ? state.serviceRedirectPolicyDn : undefined;
        } else {
            const args = argsOrState as DestinationOfRedirectedTrafficArgs | undefined;
            if ((!args || args.ip === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ip'");
            }
            if ((!args || args.serviceRedirectPolicyDn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceRedirectPolicyDn'");
            }
            resourceInputs["annotation"] = args ? args.annotation : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["destName"] = args ? args.destName : undefined;
            resourceInputs["ip"] = args ? args.ip : undefined;
            resourceInputs["ip2"] = args ? args.ip2 : undefined;
            resourceInputs["mac"] = args ? args.mac : undefined;
            resourceInputs["nameAlias"] = args ? args.nameAlias : undefined;
            resourceInputs["podId"] = args ? args.podId : undefined;
            resourceInputs["relationVnsRsRedirectHealthGroup"] = args ? args.relationVnsRsRedirectHealthGroup : undefined;
            resourceInputs["serviceRedirectPolicyDn"] = args ? args.serviceRedirectPolicyDn : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DestinationOfRedirectedTraffic.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DestinationOfRedirectedTraffic resources.
 */
export interface DestinationOfRedirectedTrafficState {
    annotation?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    destName?: pulumi.Input<string>;
    ip?: pulumi.Input<string>;
    ip2?: pulumi.Input<string>;
    mac?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    podId?: pulumi.Input<string>;
    relationVnsRsRedirectHealthGroup?: pulumi.Input<string>;
    serviceRedirectPolicyDn?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DestinationOfRedirectedTraffic resource.
 */
export interface DestinationOfRedirectedTrafficArgs {
    annotation?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    destName?: pulumi.Input<string>;
    ip: pulumi.Input<string>;
    ip2?: pulumi.Input<string>;
    mac?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    podId?: pulumi.Input<string>;
    relationVnsRsRedirectHealthGroup?: pulumi.Input<string>;
    serviceRedirectPolicyDn: pulumi.Input<string>;
}
