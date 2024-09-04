// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PanoramaSecurityPolicyGroup extends pulumi.CustomResource {
    /**
     * Get an existing PanoramaSecurityPolicyGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PanoramaSecurityPolicyGroupState, opts?: pulumi.CustomResourceOptions): PanoramaSecurityPolicyGroup {
        return new PanoramaSecurityPolicyGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'panos:index/panoramaSecurityPolicyGroup:PanoramaSecurityPolicyGroup';

    /**
     * Returns true if the given object is an instance of PanoramaSecurityPolicyGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PanoramaSecurityPolicyGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PanoramaSecurityPolicyGroup.__pulumiType;
    }

    /**
     * The device group.
     */
    public readonly deviceGroup!: pulumi.Output<string | undefined>;
    /**
     * The position keyword for this group of rules
     */
    public readonly positionKeyword!: pulumi.Output<string | undefined>;
    /**
     * The position reference for this group of rules
     */
    public readonly positionReference!: pulumi.Output<string | undefined>;
    /**
     * The rulebase location.
     */
    public readonly rulebase!: pulumi.Output<string | undefined>;
    public readonly rules!: pulumi.Output<outputs.PanoramaSecurityPolicyGroupRule[]>;
    public readonly timeouts!: pulumi.Output<outputs.PanoramaSecurityPolicyGroupTimeouts | undefined>;
    /**
     * The vsys this object belongs in.
     */
    public readonly vsys!: pulumi.Output<string | undefined>;

    /**
     * Create a PanoramaSecurityPolicyGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PanoramaSecurityPolicyGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PanoramaSecurityPolicyGroupArgs | PanoramaSecurityPolicyGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PanoramaSecurityPolicyGroupState | undefined;
            resourceInputs["deviceGroup"] = state ? state.deviceGroup : undefined;
            resourceInputs["positionKeyword"] = state ? state.positionKeyword : undefined;
            resourceInputs["positionReference"] = state ? state.positionReference : undefined;
            resourceInputs["rulebase"] = state ? state.rulebase : undefined;
            resourceInputs["rules"] = state ? state.rules : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["vsys"] = state ? state.vsys : undefined;
        } else {
            const args = argsOrState as PanoramaSecurityPolicyGroupArgs | undefined;
            if ((!args || args.rules === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rules'");
            }
            resourceInputs["deviceGroup"] = args ? args.deviceGroup : undefined;
            resourceInputs["positionKeyword"] = args ? args.positionKeyword : undefined;
            resourceInputs["positionReference"] = args ? args.positionReference : undefined;
            resourceInputs["rulebase"] = args ? args.rulebase : undefined;
            resourceInputs["rules"] = args ? args.rules : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["vsys"] = args ? args.vsys : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PanoramaSecurityPolicyGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PanoramaSecurityPolicyGroup resources.
 */
export interface PanoramaSecurityPolicyGroupState {
    /**
     * The device group.
     */
    deviceGroup?: pulumi.Input<string>;
    /**
     * The position keyword for this group of rules
     */
    positionKeyword?: pulumi.Input<string>;
    /**
     * The position reference for this group of rules
     */
    positionReference?: pulumi.Input<string>;
    /**
     * The rulebase location.
     */
    rulebase?: pulumi.Input<string>;
    rules?: pulumi.Input<pulumi.Input<inputs.PanoramaSecurityPolicyGroupRule>[]>;
    timeouts?: pulumi.Input<inputs.PanoramaSecurityPolicyGroupTimeouts>;
    /**
     * The vsys this object belongs in.
     */
    vsys?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PanoramaSecurityPolicyGroup resource.
 */
export interface PanoramaSecurityPolicyGroupArgs {
    /**
     * The device group.
     */
    deviceGroup?: pulumi.Input<string>;
    /**
     * The position keyword for this group of rules
     */
    positionKeyword?: pulumi.Input<string>;
    /**
     * The position reference for this group of rules
     */
    positionReference?: pulumi.Input<string>;
    /**
     * The rulebase location.
     */
    rulebase?: pulumi.Input<string>;
    rules: pulumi.Input<pulumi.Input<inputs.PanoramaSecurityPolicyGroupRule>[]>;
    timeouts?: pulumi.Input<inputs.PanoramaSecurityPolicyGroupTimeouts>;
    /**
     * The vsys this object belongs in.
     */
    vsys?: pulumi.Input<string>;
}
