// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ArmsEnvCustomJob extends pulumi.CustomResource {
    /**
     * Get an existing ArmsEnvCustomJob resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ArmsEnvCustomJobState, opts?: pulumi.CustomResourceOptions): ArmsEnvCustomJob {
        return new ArmsEnvCustomJob(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/armsEnvCustomJob:ArmsEnvCustomJob';

    /**
     * Returns true if the given object is an instance of ArmsEnvCustomJob.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ArmsEnvCustomJob {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ArmsEnvCustomJob.__pulumiType;
    }

    public readonly aliyunLang!: pulumi.Output<string | undefined>;
    public readonly configYaml!: pulumi.Output<string>;
    public readonly envCustomJobName!: pulumi.Output<string>;
    public readonly environmentId!: pulumi.Output<string>;
    public readonly status!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ArmsEnvCustomJobTimeouts | undefined>;

    /**
     * Create a ArmsEnvCustomJob resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ArmsEnvCustomJobArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ArmsEnvCustomJobArgs | ArmsEnvCustomJobState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ArmsEnvCustomJobState | undefined;
            resourceInputs["aliyunLang"] = state ? state.aliyunLang : undefined;
            resourceInputs["configYaml"] = state ? state.configYaml : undefined;
            resourceInputs["envCustomJobName"] = state ? state.envCustomJobName : undefined;
            resourceInputs["environmentId"] = state ? state.environmentId : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ArmsEnvCustomJobArgs | undefined;
            if ((!args || args.configYaml === undefined) && !opts.urn) {
                throw new Error("Missing required property 'configYaml'");
            }
            if ((!args || args.envCustomJobName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'envCustomJobName'");
            }
            if ((!args || args.environmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentId'");
            }
            resourceInputs["aliyunLang"] = args ? args.aliyunLang : undefined;
            resourceInputs["configYaml"] = args ? args.configYaml : undefined;
            resourceInputs["envCustomJobName"] = args ? args.envCustomJobName : undefined;
            resourceInputs["environmentId"] = args ? args.environmentId : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ArmsEnvCustomJob.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ArmsEnvCustomJob resources.
 */
export interface ArmsEnvCustomJobState {
    aliyunLang?: pulumi.Input<string>;
    configYaml?: pulumi.Input<string>;
    envCustomJobName?: pulumi.Input<string>;
    environmentId?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ArmsEnvCustomJobTimeouts>;
}

/**
 * The set of arguments for constructing a ArmsEnvCustomJob resource.
 */
export interface ArmsEnvCustomJobArgs {
    aliyunLang?: pulumi.Input<string>;
    configYaml: pulumi.Input<string>;
    envCustomJobName: pulumi.Input<string>;
    environmentId: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ArmsEnvCustomJobTimeouts>;
}
