// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CodeguruprofilerProfilingGroup extends pulumi.CustomResource {
    /**
     * Get an existing CodeguruprofilerProfilingGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CodeguruprofilerProfilingGroupState, opts?: pulumi.CustomResourceOptions): CodeguruprofilerProfilingGroup {
        return new CodeguruprofilerProfilingGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/codeguruprofilerProfilingGroup:CodeguruprofilerProfilingGroup';

    /**
     * Returns true if the given object is an instance of CodeguruprofilerProfilingGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CodeguruprofilerProfilingGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CodeguruprofilerProfilingGroup.__pulumiType;
    }

    public readonly agentOrchestrationConfigs!: pulumi.Output<outputs.CodeguruprofilerProfilingGroupAgentOrchestrationConfig[] | undefined>;
    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly computePlatform!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public /*out*/ readonly tagsAll!: pulumi.Output<{[key: string]: string}>;

    /**
     * Create a CodeguruprofilerProfilingGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CodeguruprofilerProfilingGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CodeguruprofilerProfilingGroupArgs | CodeguruprofilerProfilingGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CodeguruprofilerProfilingGroupState | undefined;
            resourceInputs["agentOrchestrationConfigs"] = state ? state.agentOrchestrationConfigs : undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["computePlatform"] = state ? state.computePlatform : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
        } else {
            const args = argsOrState as CodeguruprofilerProfilingGroupArgs | undefined;
            resourceInputs["agentOrchestrationConfigs"] = args ? args.agentOrchestrationConfigs : undefined;
            resourceInputs["computePlatform"] = args ? args.computePlatform : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["tagsAll"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CodeguruprofilerProfilingGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CodeguruprofilerProfilingGroup resources.
 */
export interface CodeguruprofilerProfilingGroupState {
    agentOrchestrationConfigs?: pulumi.Input<pulumi.Input<inputs.CodeguruprofilerProfilingGroupAgentOrchestrationConfig>[]>;
    arn?: pulumi.Input<string>;
    computePlatform?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a CodeguruprofilerProfilingGroup resource.
 */
export interface CodeguruprofilerProfilingGroupArgs {
    agentOrchestrationConfigs?: pulumi.Input<pulumi.Input<inputs.CodeguruprofilerProfilingGroupAgentOrchestrationConfig>[]>;
    computePlatform?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
