// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AuthorizeApiServiceOperation extends pulumi.CustomResource {
    /**
     * Get an existing AuthorizeApiServiceOperation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AuthorizeApiServiceOperationState, opts?: pulumi.CustomResourceOptions): AuthorizeApiServiceOperation {
        return new AuthorizeApiServiceOperation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingone:index/authorizeApiServiceOperation:AuthorizeApiServiceOperation';

    /**
     * Returns true if the given object is an instance of AuthorizeApiServiceOperation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AuthorizeApiServiceOperation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AuthorizeApiServiceOperation.__pulumiType;
    }

    /**
     * A single object that specifies properties related to access control settings of the API service operation.
     */
    public readonly accessControl!: pulumi.Output<outputs.AuthorizeApiServiceOperationAccessControl | undefined>;
    /**
     * The ID of the API service to create and manage the API Service operation for. Must be a valid PingOne resource ID. This
     * field is immutable and will trigger a replace plan if changed.
     */
    public readonly apiServiceId!: pulumi.Output<string>;
    /**
     * The ID of the environment to create and manage the API Service in. Must be a valid PingOne resource ID. This field is
     * immutable and will trigger a replace plan if changed.
     */
    public readonly environmentId!: pulumi.Output<string>;
    /**
     * The methods that define the operation. No duplicates are allowed. Each element must be a valid HTTP token, according to
     * [RFC 7230](https://datatracker.ietf.org/doc/html/rfc7230), and cannot exceed 64 characters. An empty array is not valid.
     * To indicate that an operation is defined for every method, the `methods` array should be set to null. The `methods`
     * array is limited to 10 entries. Options are `DELETE`, `GET`, `OPTIONS`, `PATCH`, `POST`, `PUT`.
     */
    public readonly methods!: pulumi.Output<string[] | undefined>;
    /**
     * A string that specifies the API service operation name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A set of objects that specifies the paths that define the operation. The same literal pattern is not allowed within the
     * same operation (the pattern of a `paths` element must be unique as compared to all other patterns in the same `paths`
     * array). However, the same literal pattern is allowed in different operations (for example, OperationA, `/path1`,
     * OperationB, `/path1` is valid). This set is limited to 10 entries.
     */
    public readonly paths!: pulumi.Output<outputs.AuthorizeApiServiceOperationPath[]>;
    /**
     * A string that represents the ID of the root policy.
     */
    public /*out*/ readonly policyId!: pulumi.Output<string>;

    /**
     * Create a AuthorizeApiServiceOperation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AuthorizeApiServiceOperationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AuthorizeApiServiceOperationArgs | AuthorizeApiServiceOperationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AuthorizeApiServiceOperationState | undefined;
            resourceInputs["accessControl"] = state ? state.accessControl : undefined;
            resourceInputs["apiServiceId"] = state ? state.apiServiceId : undefined;
            resourceInputs["environmentId"] = state ? state.environmentId : undefined;
            resourceInputs["methods"] = state ? state.methods : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["paths"] = state ? state.paths : undefined;
            resourceInputs["policyId"] = state ? state.policyId : undefined;
        } else {
            const args = argsOrState as AuthorizeApiServiceOperationArgs | undefined;
            if ((!args || args.apiServiceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiServiceId'");
            }
            if ((!args || args.environmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentId'");
            }
            if ((!args || args.paths === undefined) && !opts.urn) {
                throw new Error("Missing required property 'paths'");
            }
            resourceInputs["accessControl"] = args ? args.accessControl : undefined;
            resourceInputs["apiServiceId"] = args ? args.apiServiceId : undefined;
            resourceInputs["environmentId"] = args ? args.environmentId : undefined;
            resourceInputs["methods"] = args ? args.methods : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["paths"] = args ? args.paths : undefined;
            resourceInputs["policyId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AuthorizeApiServiceOperation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AuthorizeApiServiceOperation resources.
 */
export interface AuthorizeApiServiceOperationState {
    /**
     * A single object that specifies properties related to access control settings of the API service operation.
     */
    accessControl?: pulumi.Input<inputs.AuthorizeApiServiceOperationAccessControl>;
    /**
     * The ID of the API service to create and manage the API Service operation for. Must be a valid PingOne resource ID. This
     * field is immutable and will trigger a replace plan if changed.
     */
    apiServiceId?: pulumi.Input<string>;
    /**
     * The ID of the environment to create and manage the API Service in. Must be a valid PingOne resource ID. This field is
     * immutable and will trigger a replace plan if changed.
     */
    environmentId?: pulumi.Input<string>;
    /**
     * The methods that define the operation. No duplicates are allowed. Each element must be a valid HTTP token, according to
     * [RFC 7230](https://datatracker.ietf.org/doc/html/rfc7230), and cannot exceed 64 characters. An empty array is not valid.
     * To indicate that an operation is defined for every method, the `methods` array should be set to null. The `methods`
     * array is limited to 10 entries. Options are `DELETE`, `GET`, `OPTIONS`, `PATCH`, `POST`, `PUT`.
     */
    methods?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A string that specifies the API service operation name.
     */
    name?: pulumi.Input<string>;
    /**
     * A set of objects that specifies the paths that define the operation. The same literal pattern is not allowed within the
     * same operation (the pattern of a `paths` element must be unique as compared to all other patterns in the same `paths`
     * array). However, the same literal pattern is allowed in different operations (for example, OperationA, `/path1`,
     * OperationB, `/path1` is valid). This set is limited to 10 entries.
     */
    paths?: pulumi.Input<pulumi.Input<inputs.AuthorizeApiServiceOperationPath>[]>;
    /**
     * A string that represents the ID of the root policy.
     */
    policyId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AuthorizeApiServiceOperation resource.
 */
export interface AuthorizeApiServiceOperationArgs {
    /**
     * A single object that specifies properties related to access control settings of the API service operation.
     */
    accessControl?: pulumi.Input<inputs.AuthorizeApiServiceOperationAccessControl>;
    /**
     * The ID of the API service to create and manage the API Service operation for. Must be a valid PingOne resource ID. This
     * field is immutable and will trigger a replace plan if changed.
     */
    apiServiceId: pulumi.Input<string>;
    /**
     * The ID of the environment to create and manage the API Service in. Must be a valid PingOne resource ID. This field is
     * immutable and will trigger a replace plan if changed.
     */
    environmentId: pulumi.Input<string>;
    /**
     * The methods that define the operation. No duplicates are allowed. Each element must be a valid HTTP token, according to
     * [RFC 7230](https://datatracker.ietf.org/doc/html/rfc7230), and cannot exceed 64 characters. An empty array is not valid.
     * To indicate that an operation is defined for every method, the `methods` array should be set to null. The `methods`
     * array is limited to 10 entries. Options are `DELETE`, `GET`, `OPTIONS`, `PATCH`, `POST`, `PUT`.
     */
    methods?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A string that specifies the API service operation name.
     */
    name?: pulumi.Input<string>;
    /**
     * A set of objects that specifies the paths that define the operation. The same literal pattern is not allowed within the
     * same operation (the pattern of a `paths` element must be unique as compared to all other patterns in the same `paths`
     * array). However, the same literal pattern is allowed in different operations (for example, OperationA, `/path1`,
     * OperationB, `/path1` is valid). This set is limited to 10 entries.
     */
    paths: pulumi.Input<pulumi.Input<inputs.AuthorizeApiServiceOperationPath>[]>;
}
