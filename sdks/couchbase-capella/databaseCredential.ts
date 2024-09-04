// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DatabaseCredential extends pulumi.CustomResource {
    /**
     * Get an existing DatabaseCredential resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatabaseCredentialState, opts?: pulumi.CustomResourceOptions): DatabaseCredential {
        return new DatabaseCredential(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'couchbase-capella:index/databaseCredential:DatabaseCredential';

    /**
     * Returns true if the given object is an instance of DatabaseCredential.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatabaseCredential {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatabaseCredential.__pulumiType;
    }

    public readonly accesses!: pulumi.Output<outputs.DatabaseCredentialAccess[]>;
    public /*out*/ readonly audit!: pulumi.Output<outputs.DatabaseCredentialAudit>;
    public readonly clusterId!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly organizationId!: pulumi.Output<string>;
    public readonly password!: pulumi.Output<string>;
    public readonly projectId!: pulumi.Output<string>;

    /**
     * Create a DatabaseCredential resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseCredentialArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DatabaseCredentialArgs | DatabaseCredentialState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DatabaseCredentialState | undefined;
            resourceInputs["accesses"] = state ? state.accesses : undefined;
            resourceInputs["audit"] = state ? state.audit : undefined;
            resourceInputs["clusterId"] = state ? state.clusterId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["organizationId"] = state ? state.organizationId : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
        } else {
            const args = argsOrState as DatabaseCredentialArgs | undefined;
            if ((!args || args.accesses === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accesses'");
            }
            if ((!args || args.clusterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterId'");
            }
            if ((!args || args.organizationId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'organizationId'");
            }
            if ((!args || args.projectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectId'");
            }
            resourceInputs["accesses"] = args ? args.accesses : undefined;
            resourceInputs["clusterId"] = args ? args.clusterId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["organizationId"] = args ? args.organizationId : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["audit"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(DatabaseCredential.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DatabaseCredential resources.
 */
export interface DatabaseCredentialState {
    accesses?: pulumi.Input<pulumi.Input<inputs.DatabaseCredentialAccess>[]>;
    audit?: pulumi.Input<inputs.DatabaseCredentialAudit>;
    clusterId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    organizationId?: pulumi.Input<string>;
    password?: pulumi.Input<string>;
    projectId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DatabaseCredential resource.
 */
export interface DatabaseCredentialArgs {
    accesses: pulumi.Input<pulumi.Input<inputs.DatabaseCredentialAccess>[]>;
    clusterId: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    organizationId: pulumi.Input<string>;
    password?: pulumi.Input<string>;
    projectId: pulumi.Input<string>;
}
