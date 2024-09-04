// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class BackupUnit extends pulumi.CustomResource {
    /**
     * Get an existing BackupUnit resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BackupUnitState, opts?: pulumi.CustomResourceOptions): BackupUnit {
        return new BackupUnit(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ionoscloud:index/backupUnit:BackupUnit';

    /**
     * Returns true if the given object is an instance of BackupUnit.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BackupUnit {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BackupUnit.__pulumiType;
    }

    /**
     * The e-mail address you want assigned to the backup unit.
     */
    public readonly email!: pulumi.Output<string>;
    /**
     * The login associated with the backup unit. Derived from the contract number
     */
    public /*out*/ readonly login!: pulumi.Output<string>;
    /**
     * Alphanumeric name you want assigned to the backup unit.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The password you want assigned to the backup unit.
     */
    public readonly password!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.BackupUnitTimeouts | undefined>;

    /**
     * Create a BackupUnit resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BackupUnitArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BackupUnitArgs | BackupUnitState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BackupUnitState | undefined;
            resourceInputs["email"] = state ? state.email : undefined;
            resourceInputs["login"] = state ? state.login : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as BackupUnitArgs | undefined;
            if ((!args || args.email === undefined) && !opts.urn) {
                throw new Error("Missing required property 'email'");
            }
            if ((!args || args.password === undefined) && !opts.urn) {
                throw new Error("Missing required property 'password'");
            }
            resourceInputs["email"] = args ? args.email : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["login"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(BackupUnit.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BackupUnit resources.
 */
export interface BackupUnitState {
    /**
     * The e-mail address you want assigned to the backup unit.
     */
    email?: pulumi.Input<string>;
    /**
     * The login associated with the backup unit. Derived from the contract number
     */
    login?: pulumi.Input<string>;
    /**
     * Alphanumeric name you want assigned to the backup unit.
     */
    name?: pulumi.Input<string>;
    /**
     * The password you want assigned to the backup unit.
     */
    password?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.BackupUnitTimeouts>;
}

/**
 * The set of arguments for constructing a BackupUnit resource.
 */
export interface BackupUnitArgs {
    /**
     * The e-mail address you want assigned to the backup unit.
     */
    email: pulumi.Input<string>;
    /**
     * Alphanumeric name you want assigned to the backup unit.
     */
    name?: pulumi.Input<string>;
    /**
     * The password you want assigned to the backup unit.
     */
    password: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.BackupUnitTimeouts>;
}
