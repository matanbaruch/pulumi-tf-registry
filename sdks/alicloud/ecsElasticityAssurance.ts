// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class EcsElasticityAssurance extends pulumi.CustomResource {
    /**
     * Get an existing EcsElasticityAssurance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EcsElasticityAssuranceState, opts?: pulumi.CustomResourceOptions): EcsElasticityAssurance {
        return new EcsElasticityAssurance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/ecsElasticityAssurance:EcsElasticityAssurance';

    /**
     * Returns true if the given object is an instance of EcsElasticityAssurance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EcsElasticityAssurance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EcsElasticityAssurance.__pulumiType;
    }

    public readonly assuranceTimes!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public /*out*/ readonly elasticityAssuranceId!: pulumi.Output<string>;
    public /*out*/ readonly endTime!: pulumi.Output<string>;
    public readonly instanceAmount!: pulumi.Output<number>;
    public /*out*/ readonly instanceChargeType!: pulumi.Output<string>;
    public readonly instanceTypes!: pulumi.Output<string[]>;
    public readonly period!: pulumi.Output<number | undefined>;
    public readonly periodUnit!: pulumi.Output<string | undefined>;
    public readonly privatePoolOptionsMatchCriteria!: pulumi.Output<string>;
    public readonly privatePoolOptionsName!: pulumi.Output<string>;
    public readonly resourceGroupId!: pulumi.Output<string | undefined>;
    public readonly startTime!: pulumi.Output<string>;
    public /*out*/ readonly startTimeType!: pulumi.Output<string>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.EcsElasticityAssuranceTimeouts | undefined>;
    public /*out*/ readonly usedAssuranceTimes!: pulumi.Output<number>;
    public readonly zoneIds!: pulumi.Output<string[]>;

    /**
     * Create a EcsElasticityAssurance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EcsElasticityAssuranceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EcsElasticityAssuranceArgs | EcsElasticityAssuranceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EcsElasticityAssuranceState | undefined;
            resourceInputs["assuranceTimes"] = state ? state.assuranceTimes : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["elasticityAssuranceId"] = state ? state.elasticityAssuranceId : undefined;
            resourceInputs["endTime"] = state ? state.endTime : undefined;
            resourceInputs["instanceAmount"] = state ? state.instanceAmount : undefined;
            resourceInputs["instanceChargeType"] = state ? state.instanceChargeType : undefined;
            resourceInputs["instanceTypes"] = state ? state.instanceTypes : undefined;
            resourceInputs["period"] = state ? state.period : undefined;
            resourceInputs["periodUnit"] = state ? state.periodUnit : undefined;
            resourceInputs["privatePoolOptionsMatchCriteria"] = state ? state.privatePoolOptionsMatchCriteria : undefined;
            resourceInputs["privatePoolOptionsName"] = state ? state.privatePoolOptionsName : undefined;
            resourceInputs["resourceGroupId"] = state ? state.resourceGroupId : undefined;
            resourceInputs["startTime"] = state ? state.startTime : undefined;
            resourceInputs["startTimeType"] = state ? state.startTimeType : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["usedAssuranceTimes"] = state ? state.usedAssuranceTimes : undefined;
            resourceInputs["zoneIds"] = state ? state.zoneIds : undefined;
        } else {
            const args = argsOrState as EcsElasticityAssuranceArgs | undefined;
            if ((!args || args.instanceAmount === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceAmount'");
            }
            if ((!args || args.instanceTypes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceTypes'");
            }
            if ((!args || args.zoneIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'zoneIds'");
            }
            resourceInputs["assuranceTimes"] = args ? args.assuranceTimes : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["instanceAmount"] = args ? args.instanceAmount : undefined;
            resourceInputs["instanceTypes"] = args ? args.instanceTypes : undefined;
            resourceInputs["period"] = args ? args.period : undefined;
            resourceInputs["periodUnit"] = args ? args.periodUnit : undefined;
            resourceInputs["privatePoolOptionsMatchCriteria"] = args ? args.privatePoolOptionsMatchCriteria : undefined;
            resourceInputs["privatePoolOptionsName"] = args ? args.privatePoolOptionsName : undefined;
            resourceInputs["resourceGroupId"] = args ? args.resourceGroupId : undefined;
            resourceInputs["startTime"] = args ? args.startTime : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["zoneIds"] = args ? args.zoneIds : undefined;
            resourceInputs["elasticityAssuranceId"] = undefined /*out*/;
            resourceInputs["endTime"] = undefined /*out*/;
            resourceInputs["instanceChargeType"] = undefined /*out*/;
            resourceInputs["startTimeType"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["usedAssuranceTimes"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EcsElasticityAssurance.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EcsElasticityAssurance resources.
 */
export interface EcsElasticityAssuranceState {
    assuranceTimes?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    elasticityAssuranceId?: pulumi.Input<string>;
    endTime?: pulumi.Input<string>;
    instanceAmount?: pulumi.Input<number>;
    instanceChargeType?: pulumi.Input<string>;
    instanceTypes?: pulumi.Input<pulumi.Input<string>[]>;
    period?: pulumi.Input<number>;
    periodUnit?: pulumi.Input<string>;
    privatePoolOptionsMatchCriteria?: pulumi.Input<string>;
    privatePoolOptionsName?: pulumi.Input<string>;
    resourceGroupId?: pulumi.Input<string>;
    startTime?: pulumi.Input<string>;
    startTimeType?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.EcsElasticityAssuranceTimeouts>;
    usedAssuranceTimes?: pulumi.Input<number>;
    zoneIds?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a EcsElasticityAssurance resource.
 */
export interface EcsElasticityAssuranceArgs {
    assuranceTimes?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    instanceAmount: pulumi.Input<number>;
    instanceTypes: pulumi.Input<pulumi.Input<string>[]>;
    period?: pulumi.Input<number>;
    periodUnit?: pulumi.Input<string>;
    privatePoolOptionsMatchCriteria?: pulumi.Input<string>;
    privatePoolOptionsName?: pulumi.Input<string>;
    resourceGroupId?: pulumi.Input<string>;
    startTime?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.EcsElasticityAssuranceTimeouts>;
    zoneIds: pulumi.Input<pulumi.Input<string>[]>;
}
