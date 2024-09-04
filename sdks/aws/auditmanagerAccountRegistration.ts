// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class AuditmanagerAccountRegistration extends pulumi.CustomResource {
    /**
     * Get an existing AuditmanagerAccountRegistration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AuditmanagerAccountRegistrationState, opts?: pulumi.CustomResourceOptions): AuditmanagerAccountRegistration {
        return new AuditmanagerAccountRegistration(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/auditmanagerAccountRegistration:AuditmanagerAccountRegistration';

    /**
     * Returns true if the given object is an instance of AuditmanagerAccountRegistration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AuditmanagerAccountRegistration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AuditmanagerAccountRegistration.__pulumiType;
    }

    public readonly delegatedAdminAccount!: pulumi.Output<string | undefined>;
    public readonly deregisterOnDestroy!: pulumi.Output<boolean | undefined>;
    public readonly kmsKey!: pulumi.Output<string | undefined>;
    public /*out*/ readonly status!: pulumi.Output<string>;

    /**
     * Create a AuditmanagerAccountRegistration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: AuditmanagerAccountRegistrationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AuditmanagerAccountRegistrationArgs | AuditmanagerAccountRegistrationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AuditmanagerAccountRegistrationState | undefined;
            resourceInputs["delegatedAdminAccount"] = state ? state.delegatedAdminAccount : undefined;
            resourceInputs["deregisterOnDestroy"] = state ? state.deregisterOnDestroy : undefined;
            resourceInputs["kmsKey"] = state ? state.kmsKey : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
        } else {
            const args = argsOrState as AuditmanagerAccountRegistrationArgs | undefined;
            resourceInputs["delegatedAdminAccount"] = args ? args.delegatedAdminAccount : undefined;
            resourceInputs["deregisterOnDestroy"] = args ? args.deregisterOnDestroy : undefined;
            resourceInputs["kmsKey"] = args ? args.kmsKey : undefined;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AuditmanagerAccountRegistration.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AuditmanagerAccountRegistration resources.
 */
export interface AuditmanagerAccountRegistrationState {
    delegatedAdminAccount?: pulumi.Input<string>;
    deregisterOnDestroy?: pulumi.Input<boolean>;
    kmsKey?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AuditmanagerAccountRegistration resource.
 */
export interface AuditmanagerAccountRegistrationArgs {
    delegatedAdminAccount?: pulumi.Input<string>;
    deregisterOnDestroy?: pulumi.Input<boolean>;
    kmsKey?: pulumi.Input<string>;
}
