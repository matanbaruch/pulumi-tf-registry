// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SegmentationNetworkDomainConnectionPolicy extends pulumi.CustomResource {
    /**
     * Get an existing SegmentationNetworkDomainConnectionPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SegmentationNetworkDomainConnectionPolicyState, opts?: pulumi.CustomResourceOptions): SegmentationNetworkDomainConnectionPolicy {
        return new SegmentationNetworkDomainConnectionPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aviatrix:index/segmentationNetworkDomainConnectionPolicy:SegmentationNetworkDomainConnectionPolicy';

    /**
     * Returns true if the given object is an instance of SegmentationNetworkDomainConnectionPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SegmentationNetworkDomainConnectionPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SegmentationNetworkDomainConnectionPolicy.__pulumiType;
    }

    /**
     * Name of network domain that will be connected to domain 2.
     */
    public readonly domainName1!: pulumi.Output<string>;
    /**
     * Name of network domain that will be connected to domain 1.
     */
    public readonly domainName2!: pulumi.Output<string>;

    /**
     * Create a SegmentationNetworkDomainConnectionPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SegmentationNetworkDomainConnectionPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SegmentationNetworkDomainConnectionPolicyArgs | SegmentationNetworkDomainConnectionPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SegmentationNetworkDomainConnectionPolicyState | undefined;
            resourceInputs["domainName1"] = state ? state.domainName1 : undefined;
            resourceInputs["domainName2"] = state ? state.domainName2 : undefined;
        } else {
            const args = argsOrState as SegmentationNetworkDomainConnectionPolicyArgs | undefined;
            if ((!args || args.domainName1 === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domainName1'");
            }
            if ((!args || args.domainName2 === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domainName2'");
            }
            resourceInputs["domainName1"] = args ? args.domainName1 : undefined;
            resourceInputs["domainName2"] = args ? args.domainName2 : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SegmentationNetworkDomainConnectionPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SegmentationNetworkDomainConnectionPolicy resources.
 */
export interface SegmentationNetworkDomainConnectionPolicyState {
    /**
     * Name of network domain that will be connected to domain 2.
     */
    domainName1?: pulumi.Input<string>;
    /**
     * Name of network domain that will be connected to domain 1.
     */
    domainName2?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SegmentationNetworkDomainConnectionPolicy resource.
 */
export interface SegmentationNetworkDomainConnectionPolicyArgs {
    /**
     * Name of network domain that will be connected to domain 2.
     */
    domainName1: pulumi.Input<string>;
    /**
     * Name of network domain that will be connected to domain 1.
     */
    domainName2: pulumi.Input<string>;
}
