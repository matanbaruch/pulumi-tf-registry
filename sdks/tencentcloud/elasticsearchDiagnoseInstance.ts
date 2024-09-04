// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ElasticsearchDiagnoseInstance extends pulumi.CustomResource {
    /**
     * Get an existing ElasticsearchDiagnoseInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ElasticsearchDiagnoseInstanceState, opts?: pulumi.CustomResourceOptions): ElasticsearchDiagnoseInstance {
        return new ElasticsearchDiagnoseInstance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/elasticsearchDiagnoseInstance:ElasticsearchDiagnoseInstance';

    /**
     * Returns true if the given object is an instance of ElasticsearchDiagnoseInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ElasticsearchDiagnoseInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ElasticsearchDiagnoseInstance.__pulumiType;
    }

    /**
     * Indexes that need to be diagnosed. Wildcards are supported.
     */
    public readonly diagnoseIndices!: pulumi.Output<string | undefined>;
    /**
     * Diagnostic items that need to be triggered.
     */
    public readonly diagnoseJobs!: pulumi.Output<string[] | undefined>;
    /**
     * Instance id.
     */
    public readonly instanceId!: pulumi.Output<string>;

    /**
     * Create a ElasticsearchDiagnoseInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ElasticsearchDiagnoseInstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ElasticsearchDiagnoseInstanceArgs | ElasticsearchDiagnoseInstanceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ElasticsearchDiagnoseInstanceState | undefined;
            resourceInputs["diagnoseIndices"] = state ? state.diagnoseIndices : undefined;
            resourceInputs["diagnoseJobs"] = state ? state.diagnoseJobs : undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
        } else {
            const args = argsOrState as ElasticsearchDiagnoseInstanceArgs | undefined;
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            resourceInputs["diagnoseIndices"] = args ? args.diagnoseIndices : undefined;
            resourceInputs["diagnoseJobs"] = args ? args.diagnoseJobs : undefined;
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ElasticsearchDiagnoseInstance.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ElasticsearchDiagnoseInstance resources.
 */
export interface ElasticsearchDiagnoseInstanceState {
    /**
     * Indexes that need to be diagnosed. Wildcards are supported.
     */
    diagnoseIndices?: pulumi.Input<string>;
    /**
     * Diagnostic items that need to be triggered.
     */
    diagnoseJobs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Instance id.
     */
    instanceId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ElasticsearchDiagnoseInstance resource.
 */
export interface ElasticsearchDiagnoseInstanceArgs {
    /**
     * Indexes that need to be diagnosed. Wildcards are supported.
     */
    diagnoseIndices?: pulumi.Input<string>;
    /**
     * Diagnostic items that need to be triggered.
     */
    diagnoseJobs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Instance id.
     */
    instanceId: pulumi.Input<string>;
}
