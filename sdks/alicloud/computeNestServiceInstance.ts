// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ComputeNestServiceInstance extends pulumi.CustomResource {
    /**
     * Get an existing ComputeNestServiceInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ComputeNestServiceInstanceState, opts?: pulumi.CustomResourceOptions): ComputeNestServiceInstance {
        return new ComputeNestServiceInstance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/computeNestServiceInstance:ComputeNestServiceInstance';

    /**
     * Returns true if the given object is an instance of ComputeNestServiceInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComputeNestServiceInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComputeNestServiceInstance.__pulumiType;
    }

    public readonly commodity!: pulumi.Output<outputs.ComputeNestServiceInstanceCommodity | undefined>;
    public readonly enableInstanceOps!: pulumi.Output<boolean>;
    public readonly enableUserPrometheus!: pulumi.Output<boolean>;
    public readonly operationMetadata!: pulumi.Output<outputs.ComputeNestServiceInstanceOperationMetadata | undefined>;
    public readonly parameters!: pulumi.Output<string | undefined>;
    public readonly paymentType!: pulumi.Output<string>;
    public readonly resourceGroupId!: pulumi.Output<string>;
    public readonly serviceId!: pulumi.Output<string>;
    public readonly serviceInstanceName!: pulumi.Output<string>;
    public readonly serviceVersion!: pulumi.Output<string>;
    public readonly specificationName!: pulumi.Output<string | undefined>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly templateName!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ComputeNestServiceInstanceTimeouts | undefined>;

    /**
     * Create a ComputeNestServiceInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComputeNestServiceInstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ComputeNestServiceInstanceArgs | ComputeNestServiceInstanceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ComputeNestServiceInstanceState | undefined;
            resourceInputs["commodity"] = state ? state.commodity : undefined;
            resourceInputs["enableInstanceOps"] = state ? state.enableInstanceOps : undefined;
            resourceInputs["enableUserPrometheus"] = state ? state.enableUserPrometheus : undefined;
            resourceInputs["operationMetadata"] = state ? state.operationMetadata : undefined;
            resourceInputs["parameters"] = state ? state.parameters : undefined;
            resourceInputs["paymentType"] = state ? state.paymentType : undefined;
            resourceInputs["resourceGroupId"] = state ? state.resourceGroupId : undefined;
            resourceInputs["serviceId"] = state ? state.serviceId : undefined;
            resourceInputs["serviceInstanceName"] = state ? state.serviceInstanceName : undefined;
            resourceInputs["serviceVersion"] = state ? state.serviceVersion : undefined;
            resourceInputs["specificationName"] = state ? state.specificationName : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["templateName"] = state ? state.templateName : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ComputeNestServiceInstanceArgs | undefined;
            if ((!args || args.serviceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceId'");
            }
            if ((!args || args.serviceVersion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceVersion'");
            }
            resourceInputs["commodity"] = args ? args.commodity : undefined;
            resourceInputs["enableInstanceOps"] = args ? args.enableInstanceOps : undefined;
            resourceInputs["enableUserPrometheus"] = args ? args.enableUserPrometheus : undefined;
            resourceInputs["operationMetadata"] = args ? args.operationMetadata : undefined;
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["paymentType"] = args ? args.paymentType : undefined;
            resourceInputs["resourceGroupId"] = args ? args.resourceGroupId : undefined;
            resourceInputs["serviceId"] = args ? args.serviceId : undefined;
            resourceInputs["serviceInstanceName"] = args ? args.serviceInstanceName : undefined;
            resourceInputs["serviceVersion"] = args ? args.serviceVersion : undefined;
            resourceInputs["specificationName"] = args ? args.specificationName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["templateName"] = args ? args.templateName : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ComputeNestServiceInstance.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ComputeNestServiceInstance resources.
 */
export interface ComputeNestServiceInstanceState {
    commodity?: pulumi.Input<inputs.ComputeNestServiceInstanceCommodity>;
    enableInstanceOps?: pulumi.Input<boolean>;
    enableUserPrometheus?: pulumi.Input<boolean>;
    operationMetadata?: pulumi.Input<inputs.ComputeNestServiceInstanceOperationMetadata>;
    parameters?: pulumi.Input<string>;
    paymentType?: pulumi.Input<string>;
    resourceGroupId?: pulumi.Input<string>;
    serviceId?: pulumi.Input<string>;
    serviceInstanceName?: pulumi.Input<string>;
    serviceVersion?: pulumi.Input<string>;
    specificationName?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    templateName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ComputeNestServiceInstanceTimeouts>;
}

/**
 * The set of arguments for constructing a ComputeNestServiceInstance resource.
 */
export interface ComputeNestServiceInstanceArgs {
    commodity?: pulumi.Input<inputs.ComputeNestServiceInstanceCommodity>;
    enableInstanceOps?: pulumi.Input<boolean>;
    enableUserPrometheus?: pulumi.Input<boolean>;
    operationMetadata?: pulumi.Input<inputs.ComputeNestServiceInstanceOperationMetadata>;
    parameters?: pulumi.Input<string>;
    paymentType?: pulumi.Input<string>;
    resourceGroupId?: pulumi.Input<string>;
    serviceId: pulumi.Input<string>;
    serviceInstanceName?: pulumi.Input<string>;
    serviceVersion: pulumi.Input<string>;
    specificationName?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    templateName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ComputeNestServiceInstanceTimeouts>;
}
