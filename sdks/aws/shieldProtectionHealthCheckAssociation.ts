// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ShieldProtectionHealthCheckAssociation extends pulumi.CustomResource {
    /**
     * Get an existing ShieldProtectionHealthCheckAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ShieldProtectionHealthCheckAssociationState, opts?: pulumi.CustomResourceOptions): ShieldProtectionHealthCheckAssociation {
        return new ShieldProtectionHealthCheckAssociation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/shieldProtectionHealthCheckAssociation:ShieldProtectionHealthCheckAssociation';

    /**
     * Returns true if the given object is an instance of ShieldProtectionHealthCheckAssociation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ShieldProtectionHealthCheckAssociation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ShieldProtectionHealthCheckAssociation.__pulumiType;
    }

    public readonly healthCheckArn!: pulumi.Output<string>;
    public readonly shieldProtectionId!: pulumi.Output<string>;

    /**
     * Create a ShieldProtectionHealthCheckAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ShieldProtectionHealthCheckAssociationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ShieldProtectionHealthCheckAssociationArgs | ShieldProtectionHealthCheckAssociationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ShieldProtectionHealthCheckAssociationState | undefined;
            resourceInputs["healthCheckArn"] = state ? state.healthCheckArn : undefined;
            resourceInputs["shieldProtectionId"] = state ? state.shieldProtectionId : undefined;
        } else {
            const args = argsOrState as ShieldProtectionHealthCheckAssociationArgs | undefined;
            if ((!args || args.healthCheckArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'healthCheckArn'");
            }
            if ((!args || args.shieldProtectionId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'shieldProtectionId'");
            }
            resourceInputs["healthCheckArn"] = args ? args.healthCheckArn : undefined;
            resourceInputs["shieldProtectionId"] = args ? args.shieldProtectionId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ShieldProtectionHealthCheckAssociation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ShieldProtectionHealthCheckAssociation resources.
 */
export interface ShieldProtectionHealthCheckAssociationState {
    healthCheckArn?: pulumi.Input<string>;
    shieldProtectionId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ShieldProtectionHealthCheckAssociation resource.
 */
export interface ShieldProtectionHealthCheckAssociationArgs {
    healthCheckArn: pulumi.Input<string>;
    shieldProtectionId: pulumi.Input<string>;
}
