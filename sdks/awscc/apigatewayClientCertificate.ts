// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ApigatewayClientCertificate extends pulumi.CustomResource {
    /**
     * Get an existing ApigatewayClientCertificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApigatewayClientCertificateState, opts?: pulumi.CustomResourceOptions): ApigatewayClientCertificate {
        return new ApigatewayClientCertificate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/apigatewayClientCertificate:ApigatewayClientCertificate';

    /**
     * Returns true if the given object is an instance of ApigatewayClientCertificate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApigatewayClientCertificate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApigatewayClientCertificate.__pulumiType;
    }

    public /*out*/ readonly clientCertificateId!: pulumi.Output<string>;
    /**
     * The description of the client certificate.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * The collection of tags. Each tag element is associated with a given resource.
     */
    public readonly tags!: pulumi.Output<outputs.ApigatewayClientCertificateTag[]>;

    /**
     * Create a ApigatewayClientCertificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ApigatewayClientCertificateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApigatewayClientCertificateArgs | ApigatewayClientCertificateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApigatewayClientCertificateState | undefined;
            resourceInputs["clientCertificateId"] = state ? state.clientCertificateId : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as ApigatewayClientCertificateArgs | undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["clientCertificateId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ApigatewayClientCertificate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ApigatewayClientCertificate resources.
 */
export interface ApigatewayClientCertificateState {
    clientCertificateId?: pulumi.Input<string>;
    /**
     * The description of the client certificate.
     */
    description?: pulumi.Input<string>;
    /**
     * The collection of tags. Each tag element is associated with a given resource.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.ApigatewayClientCertificateTag>[]>;
}

/**
 * The set of arguments for constructing a ApigatewayClientCertificate resource.
 */
export interface ApigatewayClientCertificateArgs {
    /**
     * The description of the client certificate.
     */
    description?: pulumi.Input<string>;
    /**
     * The collection of tags. Each tag element is associated with a given resource.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.ApigatewayClientCertificateTag>[]>;
}
