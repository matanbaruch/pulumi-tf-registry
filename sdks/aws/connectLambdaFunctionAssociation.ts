// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ConnectLambdaFunctionAssociation extends pulumi.CustomResource {
    /**
     * Get an existing ConnectLambdaFunctionAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ConnectLambdaFunctionAssociationState, opts?: pulumi.CustomResourceOptions): ConnectLambdaFunctionAssociation {
        return new ConnectLambdaFunctionAssociation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/connectLambdaFunctionAssociation:ConnectLambdaFunctionAssociation';

    /**
     * Returns true if the given object is an instance of ConnectLambdaFunctionAssociation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ConnectLambdaFunctionAssociation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ConnectLambdaFunctionAssociation.__pulumiType;
    }

    public readonly functionArn!: pulumi.Output<string>;
    public readonly instanceId!: pulumi.Output<string>;

    /**
     * Create a ConnectLambdaFunctionAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectLambdaFunctionAssociationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ConnectLambdaFunctionAssociationArgs | ConnectLambdaFunctionAssociationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ConnectLambdaFunctionAssociationState | undefined;
            resourceInputs["functionArn"] = state ? state.functionArn : undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
        } else {
            const args = argsOrState as ConnectLambdaFunctionAssociationArgs | undefined;
            if ((!args || args.functionArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'functionArn'");
            }
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            resourceInputs["functionArn"] = args ? args.functionArn : undefined;
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ConnectLambdaFunctionAssociation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ConnectLambdaFunctionAssociation resources.
 */
export interface ConnectLambdaFunctionAssociationState {
    functionArn?: pulumi.Input<string>;
    instanceId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ConnectLambdaFunctionAssociation resource.
 */
export interface ConnectLambdaFunctionAssociationArgs {
    functionArn: pulumi.Input<string>;
    instanceId: pulumi.Input<string>;
}
