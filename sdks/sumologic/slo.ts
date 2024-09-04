// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Slo extends pulumi.CustomResource {
    /**
     * Get an existing Slo resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SloState, opts?: pulumi.CustomResourceOptions): Slo {
        return new Slo(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sumologic:index/slo:Slo';

    /**
     * Returns true if the given object is an instance of Slo.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Slo {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Slo.__pulumiType;
    }

    public readonly application!: pulumi.Output<string>;
    public readonly compliances!: pulumi.Output<outputs.SloCompliance[]>;
    public readonly createdAt!: pulumi.Output<string>;
    public readonly createdBy!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly indicator!: pulumi.Output<outputs.SloIndicator>;
    public readonly isLocked!: pulumi.Output<boolean | undefined>;
    public readonly isMutable!: pulumi.Output<boolean>;
    public readonly isSystem!: pulumi.Output<boolean>;
    public readonly modifiedAt!: pulumi.Output<string>;
    public readonly modifiedBy!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly parentId!: pulumi.Output<string>;
    public readonly postRequestMap!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly service!: pulumi.Output<string>;
    public readonly signalType!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly version!: pulumi.Output<number>;

    /**
     * Create a Slo resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SloArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SloArgs | SloState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SloState | undefined;
            resourceInputs["application"] = state ? state.application : undefined;
            resourceInputs["compliances"] = state ? state.compliances : undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["createdBy"] = state ? state.createdBy : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["indicator"] = state ? state.indicator : undefined;
            resourceInputs["isLocked"] = state ? state.isLocked : undefined;
            resourceInputs["isMutable"] = state ? state.isMutable : undefined;
            resourceInputs["isSystem"] = state ? state.isSystem : undefined;
            resourceInputs["modifiedAt"] = state ? state.modifiedAt : undefined;
            resourceInputs["modifiedBy"] = state ? state.modifiedBy : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["parentId"] = state ? state.parentId : undefined;
            resourceInputs["postRequestMap"] = state ? state.postRequestMap : undefined;
            resourceInputs["service"] = state ? state.service : undefined;
            resourceInputs["signalType"] = state ? state.signalType : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as SloArgs | undefined;
            if ((!args || args.compliances === undefined) && !opts.urn) {
                throw new Error("Missing required property 'compliances'");
            }
            if ((!args || args.indicator === undefined) && !opts.urn) {
                throw new Error("Missing required property 'indicator'");
            }
            if ((!args || args.signalType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'signalType'");
            }
            resourceInputs["application"] = args ? args.application : undefined;
            resourceInputs["compliances"] = args ? args.compliances : undefined;
            resourceInputs["createdAt"] = args ? args.createdAt : undefined;
            resourceInputs["createdBy"] = args ? args.createdBy : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["indicator"] = args ? args.indicator : undefined;
            resourceInputs["isLocked"] = args ? args.isLocked : undefined;
            resourceInputs["isMutable"] = args ? args.isMutable : undefined;
            resourceInputs["isSystem"] = args ? args.isSystem : undefined;
            resourceInputs["modifiedAt"] = args ? args.modifiedAt : undefined;
            resourceInputs["modifiedBy"] = args ? args.modifiedBy : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["parentId"] = args ? args.parentId : undefined;
            resourceInputs["postRequestMap"] = args ? args.postRequestMap : undefined;
            resourceInputs["service"] = args ? args.service : undefined;
            resourceInputs["signalType"] = args ? args.signalType : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Slo.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Slo resources.
 */
export interface SloState {
    application?: pulumi.Input<string>;
    compliances?: pulumi.Input<pulumi.Input<inputs.SloCompliance>[]>;
    createdAt?: pulumi.Input<string>;
    createdBy?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    indicator?: pulumi.Input<inputs.SloIndicator>;
    isLocked?: pulumi.Input<boolean>;
    isMutable?: pulumi.Input<boolean>;
    isSystem?: pulumi.Input<boolean>;
    modifiedAt?: pulumi.Input<string>;
    modifiedBy?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    parentId?: pulumi.Input<string>;
    postRequestMap?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    service?: pulumi.Input<string>;
    signalType?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    version?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a Slo resource.
 */
export interface SloArgs {
    application?: pulumi.Input<string>;
    compliances: pulumi.Input<pulumi.Input<inputs.SloCompliance>[]>;
    createdAt?: pulumi.Input<string>;
    createdBy?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    indicator: pulumi.Input<inputs.SloIndicator>;
    isLocked?: pulumi.Input<boolean>;
    isMutable?: pulumi.Input<boolean>;
    isSystem?: pulumi.Input<boolean>;
    modifiedAt?: pulumi.Input<string>;
    modifiedBy?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    parentId?: pulumi.Input<string>;
    postRequestMap?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    service?: pulumi.Input<string>;
    signalType: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    version?: pulumi.Input<number>;
}
