// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class AlikafkaSaslAcl extends pulumi.CustomResource {
    /**
     * Get an existing AlikafkaSaslAcl resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AlikafkaSaslAclState, opts?: pulumi.CustomResourceOptions): AlikafkaSaslAcl {
        return new AlikafkaSaslAcl(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/alikafkaSaslAcl:AlikafkaSaslAcl';

    /**
     * Returns true if the given object is an instance of AlikafkaSaslAcl.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AlikafkaSaslAcl {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AlikafkaSaslAcl.__pulumiType;
    }

    public readonly aclOperationType!: pulumi.Output<string>;
    public readonly aclResourceName!: pulumi.Output<string>;
    public readonly aclResourcePatternType!: pulumi.Output<string>;
    public readonly aclResourceType!: pulumi.Output<string>;
    public /*out*/ readonly host!: pulumi.Output<string>;
    public readonly instanceId!: pulumi.Output<string>;
    public readonly username!: pulumi.Output<string>;

    /**
     * Create a AlikafkaSaslAcl resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AlikafkaSaslAclArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AlikafkaSaslAclArgs | AlikafkaSaslAclState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AlikafkaSaslAclState | undefined;
            resourceInputs["aclOperationType"] = state ? state.aclOperationType : undefined;
            resourceInputs["aclResourceName"] = state ? state.aclResourceName : undefined;
            resourceInputs["aclResourcePatternType"] = state ? state.aclResourcePatternType : undefined;
            resourceInputs["aclResourceType"] = state ? state.aclResourceType : undefined;
            resourceInputs["host"] = state ? state.host : undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as AlikafkaSaslAclArgs | undefined;
            if ((!args || args.aclOperationType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'aclOperationType'");
            }
            if ((!args || args.aclResourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'aclResourceName'");
            }
            if ((!args || args.aclResourcePatternType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'aclResourcePatternType'");
            }
            if ((!args || args.aclResourceType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'aclResourceType'");
            }
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            if ((!args || args.username === undefined) && !opts.urn) {
                throw new Error("Missing required property 'username'");
            }
            resourceInputs["aclOperationType"] = args ? args.aclOperationType : undefined;
            resourceInputs["aclResourceName"] = args ? args.aclResourceName : undefined;
            resourceInputs["aclResourcePatternType"] = args ? args.aclResourcePatternType : undefined;
            resourceInputs["aclResourceType"] = args ? args.aclResourceType : undefined;
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
            resourceInputs["host"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AlikafkaSaslAcl.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AlikafkaSaslAcl resources.
 */
export interface AlikafkaSaslAclState {
    aclOperationType?: pulumi.Input<string>;
    aclResourceName?: pulumi.Input<string>;
    aclResourcePatternType?: pulumi.Input<string>;
    aclResourceType?: pulumi.Input<string>;
    host?: pulumi.Input<string>;
    instanceId?: pulumi.Input<string>;
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AlikafkaSaslAcl resource.
 */
export interface AlikafkaSaslAclArgs {
    aclOperationType: pulumi.Input<string>;
    aclResourceName: pulumi.Input<string>;
    aclResourcePatternType: pulumi.Input<string>;
    aclResourceType: pulumi.Input<string>;
    instanceId: pulumi.Input<string>;
    username: pulumi.Input<string>;
}
