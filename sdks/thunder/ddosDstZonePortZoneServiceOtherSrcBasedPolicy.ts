// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DdosDstZonePortZoneServiceOtherSrcBasedPolicy extends pulumi.CustomResource {
    /**
     * Get an existing DdosDstZonePortZoneServiceOtherSrcBasedPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DdosDstZonePortZoneServiceOtherSrcBasedPolicyState, opts?: pulumi.CustomResourceOptions): DdosDstZonePortZoneServiceOtherSrcBasedPolicy {
        return new DdosDstZonePortZoneServiceOtherSrcBasedPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/ddosDstZonePortZoneServiceOtherSrcBasedPolicy:DdosDstZonePortZoneServiceOtherSrcBasedPolicy';

    /**
     * Returns true if the given object is an instance of DdosDstZonePortZoneServiceOtherSrcBasedPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DdosDstZonePortZoneServiceOtherSrcBasedPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DdosDstZonePortZoneServiceOtherSrcBasedPolicy.__pulumiType;
    }

    public readonly policyClassListLists!: pulumi.Output<outputs.DdosDstZonePortZoneServiceOtherSrcBasedPolicyPolicyClassListList[] | undefined>;
    /**
     * PortOther
     */
    public readonly portOther!: pulumi.Output<string>;
    /**
     * Protocol
     */
    public readonly protocol!: pulumi.Output<string>;
    /**
     * Specify name of the policy
     */
    public readonly srcBasedPolicyName!: pulumi.Output<string>;
    /**
     * Customized tag
     */
    public readonly userTag!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;
    /**
     * ZoneName
     */
    public readonly zoneName!: pulumi.Output<string>;

    /**
     * Create a DdosDstZonePortZoneServiceOtherSrcBasedPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DdosDstZonePortZoneServiceOtherSrcBasedPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DdosDstZonePortZoneServiceOtherSrcBasedPolicyArgs | DdosDstZonePortZoneServiceOtherSrcBasedPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DdosDstZonePortZoneServiceOtherSrcBasedPolicyState | undefined;
            resourceInputs["policyClassListLists"] = state ? state.policyClassListLists : undefined;
            resourceInputs["portOther"] = state ? state.portOther : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["srcBasedPolicyName"] = state ? state.srcBasedPolicyName : undefined;
            resourceInputs["userTag"] = state ? state.userTag : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["zoneName"] = state ? state.zoneName : undefined;
        } else {
            const args = argsOrState as DdosDstZonePortZoneServiceOtherSrcBasedPolicyArgs | undefined;
            if ((!args || args.portOther === undefined) && !opts.urn) {
                throw new Error("Missing required property 'portOther'");
            }
            if ((!args || args.protocol === undefined) && !opts.urn) {
                throw new Error("Missing required property 'protocol'");
            }
            if ((!args || args.srcBasedPolicyName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'srcBasedPolicyName'");
            }
            if ((!args || args.zoneName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'zoneName'");
            }
            resourceInputs["policyClassListLists"] = args ? args.policyClassListLists : undefined;
            resourceInputs["portOther"] = args ? args.portOther : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["srcBasedPolicyName"] = args ? args.srcBasedPolicyName : undefined;
            resourceInputs["userTag"] = args ? args.userTag : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["zoneName"] = args ? args.zoneName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DdosDstZonePortZoneServiceOtherSrcBasedPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DdosDstZonePortZoneServiceOtherSrcBasedPolicy resources.
 */
export interface DdosDstZonePortZoneServiceOtherSrcBasedPolicyState {
    policyClassListLists?: pulumi.Input<pulumi.Input<inputs.DdosDstZonePortZoneServiceOtherSrcBasedPolicyPolicyClassListList>[]>;
    /**
     * PortOther
     */
    portOther?: pulumi.Input<string>;
    /**
     * Protocol
     */
    protocol?: pulumi.Input<string>;
    /**
     * Specify name of the policy
     */
    srcBasedPolicyName?: pulumi.Input<string>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * ZoneName
     */
    zoneName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DdosDstZonePortZoneServiceOtherSrcBasedPolicy resource.
 */
export interface DdosDstZonePortZoneServiceOtherSrcBasedPolicyArgs {
    policyClassListLists?: pulumi.Input<pulumi.Input<inputs.DdosDstZonePortZoneServiceOtherSrcBasedPolicyPolicyClassListList>[]>;
    /**
     * PortOther
     */
    portOther: pulumi.Input<string>;
    /**
     * Protocol
     */
    protocol: pulumi.Input<string>;
    /**
     * Specify name of the policy
     */
    srcBasedPolicyName: pulumi.Input<string>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * ZoneName
     */
    zoneName: pulumi.Input<string>;
}
