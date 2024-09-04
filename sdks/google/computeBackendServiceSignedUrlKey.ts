// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ComputeBackendServiceSignedUrlKey extends pulumi.CustomResource {
    /**
     * Get an existing ComputeBackendServiceSignedUrlKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ComputeBackendServiceSignedUrlKeyState, opts?: pulumi.CustomResourceOptions): ComputeBackendServiceSignedUrlKey {
        return new ComputeBackendServiceSignedUrlKey(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/computeBackendServiceSignedUrlKey:ComputeBackendServiceSignedUrlKey';

    /**
     * Returns true if the given object is an instance of ComputeBackendServiceSignedUrlKey.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComputeBackendServiceSignedUrlKey {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComputeBackendServiceSignedUrlKey.__pulumiType;
    }

    /**
     * The backend service this signed URL key belongs.
     */
    public readonly backendService!: pulumi.Output<string>;
    /**
     * 128-bit key value used for signing the URL. The key value must be a valid RFC 4648 Section 5 base64url encoded string.
     */
    public readonly keyValue!: pulumi.Output<string>;
    /**
     * Name of the signed URL key.
     */
    public readonly name!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ComputeBackendServiceSignedUrlKeyTimeouts | undefined>;

    /**
     * Create a ComputeBackendServiceSignedUrlKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComputeBackendServiceSignedUrlKeyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ComputeBackendServiceSignedUrlKeyArgs | ComputeBackendServiceSignedUrlKeyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ComputeBackendServiceSignedUrlKeyState | undefined;
            resourceInputs["backendService"] = state ? state.backendService : undefined;
            resourceInputs["keyValue"] = state ? state.keyValue : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ComputeBackendServiceSignedUrlKeyArgs | undefined;
            if ((!args || args.backendService === undefined) && !opts.urn) {
                throw new Error("Missing required property 'backendService'");
            }
            if ((!args || args.keyValue === undefined) && !opts.urn) {
                throw new Error("Missing required property 'keyValue'");
            }
            resourceInputs["backendService"] = args ? args.backendService : undefined;
            resourceInputs["keyValue"] = args?.keyValue ? pulumi.secret(args.keyValue) : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["keyValue"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(ComputeBackendServiceSignedUrlKey.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ComputeBackendServiceSignedUrlKey resources.
 */
export interface ComputeBackendServiceSignedUrlKeyState {
    /**
     * The backend service this signed URL key belongs.
     */
    backendService?: pulumi.Input<string>;
    /**
     * 128-bit key value used for signing the URL. The key value must be a valid RFC 4648 Section 5 base64url encoded string.
     */
    keyValue?: pulumi.Input<string>;
    /**
     * Name of the signed URL key.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ComputeBackendServiceSignedUrlKeyTimeouts>;
}

/**
 * The set of arguments for constructing a ComputeBackendServiceSignedUrlKey resource.
 */
export interface ComputeBackendServiceSignedUrlKeyArgs {
    /**
     * The backend service this signed URL key belongs.
     */
    backendService: pulumi.Input<string>;
    /**
     * 128-bit key value used for signing the URL. The key value must be a valid RFC 4648 Section 5 base64url encoded string.
     */
    keyValue: pulumi.Input<string>;
    /**
     * Name of the signed URL key.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ComputeBackendServiceSignedUrlKeyTimeouts>;
}
