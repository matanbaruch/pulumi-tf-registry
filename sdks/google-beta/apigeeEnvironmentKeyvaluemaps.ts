// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ApigeeEnvironmentKeyvaluemaps extends pulumi.CustomResource {
    /**
     * Get an existing ApigeeEnvironmentKeyvaluemaps resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApigeeEnvironmentKeyvaluemapsState, opts?: pulumi.CustomResourceOptions): ApigeeEnvironmentKeyvaluemaps {
        return new ApigeeEnvironmentKeyvaluemaps(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/apigeeEnvironmentKeyvaluemaps:ApigeeEnvironmentKeyvaluemaps';

    /**
     * Returns true if the given object is an instance of ApigeeEnvironmentKeyvaluemaps.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApigeeEnvironmentKeyvaluemaps {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApigeeEnvironmentKeyvaluemaps.__pulumiType;
    }

    /**
     * The Apigee environment group associated with the Apigee environment, in the format
     * 'organizations/{{org_name}}/environments/{{env_name}}'.
     */
    public readonly envId!: pulumi.Output<string>;
    /**
     * Required. ID of the key value map.
     */
    public readonly name!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ApigeeEnvironmentKeyvaluemapsTimeouts | undefined>;

    /**
     * Create a ApigeeEnvironmentKeyvaluemaps resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApigeeEnvironmentKeyvaluemapsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApigeeEnvironmentKeyvaluemapsArgs | ApigeeEnvironmentKeyvaluemapsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApigeeEnvironmentKeyvaluemapsState | undefined;
            resourceInputs["envId"] = state ? state.envId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ApigeeEnvironmentKeyvaluemapsArgs | undefined;
            if ((!args || args.envId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'envId'");
            }
            resourceInputs["envId"] = args ? args.envId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ApigeeEnvironmentKeyvaluemaps.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ApigeeEnvironmentKeyvaluemaps resources.
 */
export interface ApigeeEnvironmentKeyvaluemapsState {
    /**
     * The Apigee environment group associated with the Apigee environment, in the format
     * 'organizations/{{org_name}}/environments/{{env_name}}'.
     */
    envId?: pulumi.Input<string>;
    /**
     * Required. ID of the key value map.
     */
    name?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ApigeeEnvironmentKeyvaluemapsTimeouts>;
}

/**
 * The set of arguments for constructing a ApigeeEnvironmentKeyvaluemaps resource.
 */
export interface ApigeeEnvironmentKeyvaluemapsArgs {
    /**
     * The Apigee environment group associated with the Apigee environment, in the format
     * 'organizations/{{org_name}}/environments/{{env_name}}'.
     */
    envId: pulumi.Input<string>;
    /**
     * Required. ID of the key value map.
     */
    name?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ApigeeEnvironmentKeyvaluemapsTimeouts>;
}
