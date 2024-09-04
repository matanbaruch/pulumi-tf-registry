// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Smtp extends pulumi.CustomResource {
    /**
     * Get an existing Smtp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SmtpState, opts?: pulumi.CustomResourceOptions): Smtp {
        return new Smtp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/smtp:Smtp';

    /**
     * Returns true if the given object is an instance of Smtp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Smtp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Smtp.__pulumiType;
    }

    /**
     * Configure email source address
     */
    public readonly mailfrom!: pulumi.Output<string | undefined>;
    /**
     * Configure SMTP server need authtication
     */
    public readonly needauthentication!: pulumi.Output<number | undefined>;
    /**
     * Configure SMTP Port (Configure SMTP port, default is 25)
     */
    public readonly port!: pulumi.Output<number | undefined>;
    /**
     * Configure SMTP Server (length:1-254)
     */
    public readonly smtpServer!: pulumi.Output<string | undefined>;
    /**
     * Configure SMTP Server IPV6 address
     */
    public readonly smtpServerV6!: pulumi.Output<string | undefined>;
    /**
     * Use management port as source port
     */
    public readonly useMgmtPort!: pulumi.Output<number | undefined>;
    public readonly usernameCfg!: pulumi.Output<outputs.SmtpUsernameCfg | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a Smtp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SmtpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SmtpArgs | SmtpState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SmtpState | undefined;
            resourceInputs["mailfrom"] = state ? state.mailfrom : undefined;
            resourceInputs["needauthentication"] = state ? state.needauthentication : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["smtpServer"] = state ? state.smtpServer : undefined;
            resourceInputs["smtpServerV6"] = state ? state.smtpServerV6 : undefined;
            resourceInputs["useMgmtPort"] = state ? state.useMgmtPort : undefined;
            resourceInputs["usernameCfg"] = state ? state.usernameCfg : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as SmtpArgs | undefined;
            resourceInputs["mailfrom"] = args ? args.mailfrom : undefined;
            resourceInputs["needauthentication"] = args ? args.needauthentication : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["smtpServer"] = args ? args.smtpServer : undefined;
            resourceInputs["smtpServerV6"] = args ? args.smtpServerV6 : undefined;
            resourceInputs["useMgmtPort"] = args ? args.useMgmtPort : undefined;
            resourceInputs["usernameCfg"] = args ? args.usernameCfg : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Smtp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Smtp resources.
 */
export interface SmtpState {
    /**
     * Configure email source address
     */
    mailfrom?: pulumi.Input<string>;
    /**
     * Configure SMTP server need authtication
     */
    needauthentication?: pulumi.Input<number>;
    /**
     * Configure SMTP Port (Configure SMTP port, default is 25)
     */
    port?: pulumi.Input<number>;
    /**
     * Configure SMTP Server (length:1-254)
     */
    smtpServer?: pulumi.Input<string>;
    /**
     * Configure SMTP Server IPV6 address
     */
    smtpServerV6?: pulumi.Input<string>;
    /**
     * Use management port as source port
     */
    useMgmtPort?: pulumi.Input<number>;
    usernameCfg?: pulumi.Input<inputs.SmtpUsernameCfg>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Smtp resource.
 */
export interface SmtpArgs {
    /**
     * Configure email source address
     */
    mailfrom?: pulumi.Input<string>;
    /**
     * Configure SMTP server need authtication
     */
    needauthentication?: pulumi.Input<number>;
    /**
     * Configure SMTP Port (Configure SMTP port, default is 25)
     */
    port?: pulumi.Input<number>;
    /**
     * Configure SMTP Server (length:1-254)
     */
    smtpServer?: pulumi.Input<string>;
    /**
     * Configure SMTP Server IPV6 address
     */
    smtpServerV6?: pulumi.Input<string>;
    /**
     * Use management port as source port
     */
    useMgmtPort?: pulumi.Input<number>;
    usernameCfg?: pulumi.Input<inputs.SmtpUsernameCfg>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
