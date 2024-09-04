// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ApigeeSharedflow extends pulumi.CustomResource {
    /**
     * Get an existing ApigeeSharedflow resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApigeeSharedflowState, opts?: pulumi.CustomResourceOptions): ApigeeSharedflow {
        return new ApigeeSharedflow(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/apigeeSharedflow:ApigeeSharedflow';

    /**
     * Returns true if the given object is an instance of ApigeeSharedflow.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApigeeSharedflow {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApigeeSharedflow.__pulumiType;
    }

    /**
     * Path to the config zip bundle
     */
    public readonly configBundle!: pulumi.Output<string>;
    public readonly detectMd5hash!: pulumi.Output<string | undefined>;
    /**
     * The id of the most recently created revision for this shared flow.
     */
    public /*out*/ readonly latestRevisionId!: pulumi.Output<string>;
    /**
     * Base 64 MD5 hash of the uploaded config bundle.
     */
    public /*out*/ readonly md5hash!: pulumi.Output<string>;
    /**
     * Metadata describing the shared flow.
     */
    public /*out*/ readonly metaDatas!: pulumi.Output<outputs.ApigeeSharedflowMetaData[]>;
    /**
     * The ID of the shared flow.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The Apigee Organization name associated with the Apigee instance.
     */
    public readonly orgId!: pulumi.Output<string>;
    /**
     * A list of revisions of this shared flow.
     */
    public /*out*/ readonly revisions!: pulumi.Output<string[]>;
    public readonly timeouts!: pulumi.Output<outputs.ApigeeSharedflowTimeouts | undefined>;

    /**
     * Create a ApigeeSharedflow resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApigeeSharedflowArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApigeeSharedflowArgs | ApigeeSharedflowState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApigeeSharedflowState | undefined;
            resourceInputs["configBundle"] = state ? state.configBundle : undefined;
            resourceInputs["detectMd5hash"] = state ? state.detectMd5hash : undefined;
            resourceInputs["latestRevisionId"] = state ? state.latestRevisionId : undefined;
            resourceInputs["md5hash"] = state ? state.md5hash : undefined;
            resourceInputs["metaDatas"] = state ? state.metaDatas : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["orgId"] = state ? state.orgId : undefined;
            resourceInputs["revisions"] = state ? state.revisions : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ApigeeSharedflowArgs | undefined;
            if ((!args || args.configBundle === undefined) && !opts.urn) {
                throw new Error("Missing required property 'configBundle'");
            }
            if ((!args || args.orgId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'orgId'");
            }
            resourceInputs["configBundle"] = args ? args.configBundle : undefined;
            resourceInputs["detectMd5hash"] = args ? args.detectMd5hash : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["orgId"] = args ? args.orgId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["latestRevisionId"] = undefined /*out*/;
            resourceInputs["md5hash"] = undefined /*out*/;
            resourceInputs["metaDatas"] = undefined /*out*/;
            resourceInputs["revisions"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ApigeeSharedflow.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ApigeeSharedflow resources.
 */
export interface ApigeeSharedflowState {
    /**
     * Path to the config zip bundle
     */
    configBundle?: pulumi.Input<string>;
    detectMd5hash?: pulumi.Input<string>;
    /**
     * The id of the most recently created revision for this shared flow.
     */
    latestRevisionId?: pulumi.Input<string>;
    /**
     * Base 64 MD5 hash of the uploaded config bundle.
     */
    md5hash?: pulumi.Input<string>;
    /**
     * Metadata describing the shared flow.
     */
    metaDatas?: pulumi.Input<pulumi.Input<inputs.ApigeeSharedflowMetaData>[]>;
    /**
     * The ID of the shared flow.
     */
    name?: pulumi.Input<string>;
    /**
     * The Apigee Organization name associated with the Apigee instance.
     */
    orgId?: pulumi.Input<string>;
    /**
     * A list of revisions of this shared flow.
     */
    revisions?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.ApigeeSharedflowTimeouts>;
}

/**
 * The set of arguments for constructing a ApigeeSharedflow resource.
 */
export interface ApigeeSharedflowArgs {
    /**
     * Path to the config zip bundle
     */
    configBundle: pulumi.Input<string>;
    detectMd5hash?: pulumi.Input<string>;
    /**
     * The ID of the shared flow.
     */
    name?: pulumi.Input<string>;
    /**
     * The Apigee Organization name associated with the Apigee instance.
     */
    orgId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ApigeeSharedflowTimeouts>;
}
