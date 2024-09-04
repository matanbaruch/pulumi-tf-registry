// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PipesPipe extends pulumi.CustomResource {
    /**
     * Get an existing PipesPipe resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PipesPipeState, opts?: pulumi.CustomResourceOptions): PipesPipe {
        return new PipesPipe(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/pipesPipe:PipesPipe';

    /**
     * Returns true if the given object is an instance of PipesPipe.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PipesPipe {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PipesPipe.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly desiredState!: pulumi.Output<string | undefined>;
    public readonly enrichment!: pulumi.Output<string | undefined>;
    public readonly enrichmentParameters!: pulumi.Output<outputs.PipesPipeEnrichmentParameters | undefined>;
    public readonly logConfiguration!: pulumi.Output<outputs.PipesPipeLogConfiguration | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly namePrefix!: pulumi.Output<string>;
    public readonly roleArn!: pulumi.Output<string>;
    public readonly source!: pulumi.Output<string>;
    public readonly sourceParameters!: pulumi.Output<outputs.PipesPipeSourceParameters | undefined>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    public readonly target!: pulumi.Output<string>;
    public readonly targetParameters!: pulumi.Output<outputs.PipesPipeTargetParameters | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.PipesPipeTimeouts | undefined>;

    /**
     * Create a PipesPipe resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PipesPipeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PipesPipeArgs | PipesPipeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PipesPipeState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["desiredState"] = state ? state.desiredState : undefined;
            resourceInputs["enrichment"] = state ? state.enrichment : undefined;
            resourceInputs["enrichmentParameters"] = state ? state.enrichmentParameters : undefined;
            resourceInputs["logConfiguration"] = state ? state.logConfiguration : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["namePrefix"] = state ? state.namePrefix : undefined;
            resourceInputs["roleArn"] = state ? state.roleArn : undefined;
            resourceInputs["source"] = state ? state.source : undefined;
            resourceInputs["sourceParameters"] = state ? state.sourceParameters : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
            resourceInputs["target"] = state ? state.target : undefined;
            resourceInputs["targetParameters"] = state ? state.targetParameters : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as PipesPipeArgs | undefined;
            if ((!args || args.roleArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'roleArn'");
            }
            if ((!args || args.source === undefined) && !opts.urn) {
                throw new Error("Missing required property 'source'");
            }
            if ((!args || args.target === undefined) && !opts.urn) {
                throw new Error("Missing required property 'target'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["desiredState"] = args ? args.desiredState : undefined;
            resourceInputs["enrichment"] = args ? args.enrichment : undefined;
            resourceInputs["enrichmentParameters"] = args ? args.enrichmentParameters : undefined;
            resourceInputs["logConfiguration"] = args ? args.logConfiguration : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["namePrefix"] = args ? args.namePrefix : undefined;
            resourceInputs["roleArn"] = args ? args.roleArn : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["sourceParameters"] = args ? args.sourceParameters : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["target"] = args ? args.target : undefined;
            resourceInputs["targetParameters"] = args ? args.targetParameters : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["arn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PipesPipe.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PipesPipe resources.
 */
export interface PipesPipeState {
    arn?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    desiredState?: pulumi.Input<string>;
    enrichment?: pulumi.Input<string>;
    enrichmentParameters?: pulumi.Input<inputs.PipesPipeEnrichmentParameters>;
    logConfiguration?: pulumi.Input<inputs.PipesPipeLogConfiguration>;
    name?: pulumi.Input<string>;
    namePrefix?: pulumi.Input<string>;
    roleArn?: pulumi.Input<string>;
    source?: pulumi.Input<string>;
    sourceParameters?: pulumi.Input<inputs.PipesPipeSourceParameters>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    target?: pulumi.Input<string>;
    targetParameters?: pulumi.Input<inputs.PipesPipeTargetParameters>;
    timeouts?: pulumi.Input<inputs.PipesPipeTimeouts>;
}

/**
 * The set of arguments for constructing a PipesPipe resource.
 */
export interface PipesPipeArgs {
    description?: pulumi.Input<string>;
    desiredState?: pulumi.Input<string>;
    enrichment?: pulumi.Input<string>;
    enrichmentParameters?: pulumi.Input<inputs.PipesPipeEnrichmentParameters>;
    logConfiguration?: pulumi.Input<inputs.PipesPipeLogConfiguration>;
    name?: pulumi.Input<string>;
    namePrefix?: pulumi.Input<string>;
    roleArn: pulumi.Input<string>;
    source: pulumi.Input<string>;
    sourceParameters?: pulumi.Input<inputs.PipesPipeSourceParameters>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    target: pulumi.Input<string>;
    targetParameters?: pulumi.Input<inputs.PipesPipeTargetParameters>;
    timeouts?: pulumi.Input<inputs.PipesPipeTimeouts>;
}
