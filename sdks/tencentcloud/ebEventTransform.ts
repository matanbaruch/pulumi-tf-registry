// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class EbEventTransform extends pulumi.CustomResource {
    /**
     * Get an existing EbEventTransform resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EbEventTransformState, opts?: pulumi.CustomResourceOptions): EbEventTransform {
        return new EbEventTransform(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/ebEventTransform:EbEventTransform';

    /**
     * Returns true if the given object is an instance of EbEventTransform.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EbEventTransform {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EbEventTransform.__pulumiType;
    }

    /**
     * event bus Id.
     */
    public readonly eventBusId!: pulumi.Output<string>;
    /**
     * ruleId.
     */
    public readonly ruleId!: pulumi.Output<string>;
    /**
     * A list of transformation rules, currently only one.
     */
    public readonly transformations!: pulumi.Output<outputs.EbEventTransformTransformation[]>;

    /**
     * Create a EbEventTransform resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EbEventTransformArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EbEventTransformArgs | EbEventTransformState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EbEventTransformState | undefined;
            resourceInputs["eventBusId"] = state ? state.eventBusId : undefined;
            resourceInputs["ruleId"] = state ? state.ruleId : undefined;
            resourceInputs["transformations"] = state ? state.transformations : undefined;
        } else {
            const args = argsOrState as EbEventTransformArgs | undefined;
            if ((!args || args.eventBusId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'eventBusId'");
            }
            if ((!args || args.ruleId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ruleId'");
            }
            if ((!args || args.transformations === undefined) && !opts.urn) {
                throw new Error("Missing required property 'transformations'");
            }
            resourceInputs["eventBusId"] = args ? args.eventBusId : undefined;
            resourceInputs["ruleId"] = args ? args.ruleId : undefined;
            resourceInputs["transformations"] = args ? args.transformations : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EbEventTransform.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EbEventTransform resources.
 */
export interface EbEventTransformState {
    /**
     * event bus Id.
     */
    eventBusId?: pulumi.Input<string>;
    /**
     * ruleId.
     */
    ruleId?: pulumi.Input<string>;
    /**
     * A list of transformation rules, currently only one.
     */
    transformations?: pulumi.Input<pulumi.Input<inputs.EbEventTransformTransformation>[]>;
}

/**
 * The set of arguments for constructing a EbEventTransform resource.
 */
export interface EbEventTransformArgs {
    /**
     * event bus Id.
     */
    eventBusId: pulumi.Input<string>;
    /**
     * ruleId.
     */
    ruleId: pulumi.Input<string>;
    /**
     * A list of transformation rules, currently only one.
     */
    transformations: pulumi.Input<pulumi.Input<inputs.EbEventTransformTransformation>[]>;
}
