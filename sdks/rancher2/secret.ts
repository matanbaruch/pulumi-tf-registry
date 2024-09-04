// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Secret extends pulumi.CustomResource {
    /**
     * Get an existing Secret resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecretState, opts?: pulumi.CustomResourceOptions): Secret {
        return new Secret(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'rancher2:index/secret:Secret';

    /**
     * Returns true if the given object is an instance of Secret.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Secret {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Secret.__pulumiType;
    }

    /**
     * Annotations of the resource
     */
    public readonly annotations!: pulumi.Output<{[key: string]: string}>;
    /**
     * Secret data base64 encoded
     */
    public readonly data!: pulumi.Output<{[key: string]: string}>;
    /**
     * Secret description
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Labels of the resource
     */
    public readonly labels!: pulumi.Output<{[key: string]: string}>;
    /**
     * Secret name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Namespace ID to add secret
     */
    public readonly namespaceId!: pulumi.Output<string | undefined>;
    /**
     * Project ID to add secret
     */
    public readonly projectId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.SecretTimeouts | undefined>;

    /**
     * Create a Secret resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecretArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SecretArgs | SecretState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SecretState | undefined;
            resourceInputs["annotations"] = state ? state.annotations : undefined;
            resourceInputs["data"] = state ? state.data : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["namespaceId"] = state ? state.namespaceId : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as SecretArgs | undefined;
            if ((!args || args.data === undefined) && !opts.urn) {
                throw new Error("Missing required property 'data'");
            }
            if ((!args || args.projectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectId'");
            }
            resourceInputs["annotations"] = args ? args.annotations : undefined;
            resourceInputs["data"] = args?.data ? pulumi.secret(args.data) : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["namespaceId"] = args ? args.namespaceId : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["data"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Secret.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Secret resources.
 */
export interface SecretState {
    /**
     * Annotations of the resource
     */
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Secret data base64 encoded
     */
    data?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Secret description
     */
    description?: pulumi.Input<string>;
    /**
     * Labels of the resource
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Secret name
     */
    name?: pulumi.Input<string>;
    /**
     * Namespace ID to add secret
     */
    namespaceId?: pulumi.Input<string>;
    /**
     * Project ID to add secret
     */
    projectId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SecretTimeouts>;
}

/**
 * The set of arguments for constructing a Secret resource.
 */
export interface SecretArgs {
    /**
     * Annotations of the resource
     */
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Secret data base64 encoded
     */
    data: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Secret description
     */
    description?: pulumi.Input<string>;
    /**
     * Labels of the resource
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Secret name
     */
    name?: pulumi.Input<string>;
    /**
     * Namespace ID to add secret
     */
    namespaceId?: pulumi.Input<string>;
    /**
     * Project ID to add secret
     */
    projectId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SecretTimeouts>;
}
