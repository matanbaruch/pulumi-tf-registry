// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class L3outRedistributePolicy extends pulumi.CustomResource {
    /**
     * Get an existing L3outRedistributePolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: L3outRedistributePolicyState, opts?: pulumi.CustomResourceOptions): L3outRedistributePolicy {
        return new L3outRedistributePolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aci:index/l3outRedistributePolicy:L3outRedistributePolicy';

    /**
     * Returns true if the given object is an instance of L3outRedistributePolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is L3outRedistributePolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === L3outRedistributePolicy.__pulumiType;
    }

    /**
     * The annotation of the L3out Redistribute Policy object.
     */
    public readonly annotation!: pulumi.Output<string>;
    public readonly annotations!: pulumi.Output<outputs.L3outRedistributePolicyAnnotation[]>;
    /**
     * The distinguished name (DN) of the parent object.
     */
    public readonly parentDn!: pulumi.Output<string>;
    /**
     * The name of the Route Control Profile object.
     */
    public readonly routeControlProfileName!: pulumi.Output<string>;
    /**
     * The source of the L3out Redistribute Policy object.
     */
    public readonly source!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<outputs.L3outRedistributePolicyTag[]>;

    /**
     * Create a L3outRedistributePolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: L3outRedistributePolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: L3outRedistributePolicyArgs | L3outRedistributePolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as L3outRedistributePolicyState | undefined;
            resourceInputs["annotation"] = state ? state.annotation : undefined;
            resourceInputs["annotations"] = state ? state.annotations : undefined;
            resourceInputs["parentDn"] = state ? state.parentDn : undefined;
            resourceInputs["routeControlProfileName"] = state ? state.routeControlProfileName : undefined;
            resourceInputs["source"] = state ? state.source : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as L3outRedistributePolicyArgs | undefined;
            if ((!args || args.parentDn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parentDn'");
            }
            if ((!args || args.routeControlProfileName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'routeControlProfileName'");
            }
            if ((!args || args.source === undefined) && !opts.urn) {
                throw new Error("Missing required property 'source'");
            }
            resourceInputs["annotation"] = args ? args.annotation : undefined;
            resourceInputs["annotations"] = args ? args.annotations : undefined;
            resourceInputs["parentDn"] = args ? args.parentDn : undefined;
            resourceInputs["routeControlProfileName"] = args ? args.routeControlProfileName : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(L3outRedistributePolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering L3outRedistributePolicy resources.
 */
export interface L3outRedistributePolicyState {
    /**
     * The annotation of the L3out Redistribute Policy object.
     */
    annotation?: pulumi.Input<string>;
    annotations?: pulumi.Input<pulumi.Input<inputs.L3outRedistributePolicyAnnotation>[]>;
    /**
     * The distinguished name (DN) of the parent object.
     */
    parentDn?: pulumi.Input<string>;
    /**
     * The name of the Route Control Profile object.
     */
    routeControlProfileName?: pulumi.Input<string>;
    /**
     * The source of the L3out Redistribute Policy object.
     */
    source?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.L3outRedistributePolicyTag>[]>;
}

/**
 * The set of arguments for constructing a L3outRedistributePolicy resource.
 */
export interface L3outRedistributePolicyArgs {
    /**
     * The annotation of the L3out Redistribute Policy object.
     */
    annotation?: pulumi.Input<string>;
    annotations?: pulumi.Input<pulumi.Input<inputs.L3outRedistributePolicyAnnotation>[]>;
    /**
     * The distinguished name (DN) of the parent object.
     */
    parentDn: pulumi.Input<string>;
    /**
     * The name of the Route Control Profile object.
     */
    routeControlProfileName: pulumi.Input<string>;
    /**
     * The source of the L3out Redistribute Policy object.
     */
    source: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.L3outRedistributePolicyTag>[]>;
}
